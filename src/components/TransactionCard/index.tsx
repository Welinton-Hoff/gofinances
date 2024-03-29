import React from "react";
import { categories } from "../../utils/categories";

import {
  Date,
  Icon,
  Title,
  Amount,
  Footer,
  Category,
  Container,
  CategoryName,
} from "./styles";

export interface TransactionCardProps {
  name: string;
  date: string;
  amount: string;
  category: String;
  type: "positive" | "negative";
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  const [category] = categories.filter((item) => item.key === data.category);

  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
