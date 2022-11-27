import React, { Fragment } from "react";
import { VictoryPie } from "victory-native";
import { RFValue } from "react-native-responsive-fontsize";

import { HistoryCard } from "../../../../components/HistoryCard";

import { ChartContainer } from "./styles";
import { useTheme } from "styled-components";

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
      fontSize: RFValue(18),
      fontWeight: "bold",
      fill: theme.colors.SHAPE,
    },
  };

  console.log("data => ", data);

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
