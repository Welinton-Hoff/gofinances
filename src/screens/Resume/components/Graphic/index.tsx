import React, { Fragment } from "react";
import { VictoryPie } from "victory-native";
import { RFValue } from "react-native-responsive-fontsize";

import { useTheme } from "styled-components";
import { HistoryCard } from "../../../../components/HistoryCard";

import {
  ChartContainer,
  EmptyIcon,
  EmptyMessage,
  EmptyContent,
} from "./styles";

export interface CategoryData {
  key: string;
  name: string;
  total: number;
  color: string;
  percent: string;
  totalFormatted: string;
}

interface GraphicProps {
  data: CategoryData[];
}

export function Graphic({ data }: GraphicProps) {
  const theme = useTheme();
  const VictoryPieStyle = {
    labels: {
      fontWeight: "bold",
      fontSize: RFValue(14),
      fill: theme.colors.SHAPE,
    },
  };

  if (!!data && data.length > 0) {
    return (
      <Fragment>
        <ChartContainer>
          <VictoryPie
            y="total"
            x="percent"
            data={data}
            labelRadius={50}
            style={VictoryPieStyle}
            colorScale={data.map((category) => category.color)}
          />
        </ChartContainer>

        {data.map((item) => (
          <HistoryCard
            key={item.key}
            title={item.name}
            color={item.color}
            amount={item.totalFormatted}
          />
        ))}
      </Fragment>
    );
  }

  return (
    <EmptyContent>
      <EmptyIcon />
      <EmptyMessage>Nenhum resumo encontrado para este período</EmptyMessage>
    </EmptyContent>
  );
}
