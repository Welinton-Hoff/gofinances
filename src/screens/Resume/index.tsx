import { ptBR } from "date-fns/locale";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";
import { addMonths, subMonths, format } from "date-fns";
import { useFocusEffect } from "@react-navigation/core";
import React, { Fragment, useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useAuth } from "../../hooks/auth";
import { CategoryData, Graphic } from "./components/Graphic";
import { categories } from "../../utils/categories";

import {
  Title,
  Month,
  Header,
  Content,
  Container,
  MonthSelect,
  LoadContainer,
  MonthSelectIcon,
  MonthSelectButton,
} from "./styles";

interface TransactionData {
  name: string;
  date: string;
  amount: string;
  category: string;
  type: "positive" | "negative";
}

export function Resume() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  const theme = useTheme();
  const { user } = useAuth();

  function handleDateChange(action: "next" | "prev"): void {
    if (action === "next") {
      return setSelectedDate(addMonths(selectedDate, 1));
    }

    setSelectedDate(subMonths(selectedDate, 1));
  }

  async function loadData(): Promise<void> {
    setIsLoading(true);

    const totalByCategory: CategoryData[] = [];
    const dataKey = `@gofinances:transactions_user:${user.id}`;
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) =>
        expensive.type === "negative" &&
        new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    );

    const expensivesTotal = expensives.reduce(
      (acumullator: number, expensive: TransactionData) => {
        return acumullator + Number(expensive.amount);
      },
      0
    );

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key)
          categorySum += Number(expensive.amount);
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = `${((categorySum / expensivesTotal) * 100).toFixed(
          0
        )}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent,
        });
      }
    });

    setIsLoading(false);
    setTotalByCategories(totalByCategory);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.PRIMARY_COLOR} size="large" />
        </LoadContainer>
      ) : (
        <Fragment>
          <MonthSelect>
            <MonthSelectButton onPress={() => handleDateChange("prev")}>
              <MonthSelectIcon name="chevron-left" />
            </MonthSelectButton>

            <Month>
              {format(selectedDate, "MMMM, yyyy", { locale: ptBR })}
            </Month>

            <MonthSelectButton onPress={() => handleDateChange("next")}>
              <MonthSelectIcon name="chevron-right" />
            </MonthSelectButton>
          </MonthSelect>

          <Content
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingBottom: useBottomTabBarHeight(),
            }}
          >
            <Graphic data={totalByCategories} />
          </Content>
        </Fragment>
      )}
    </Container>
  );
}
