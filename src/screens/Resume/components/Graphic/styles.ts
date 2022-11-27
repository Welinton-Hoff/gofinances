import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const EmptyContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyIcon = styled.Image.attrs({
  source: require("../../../../assets/magnifying-glass.png"),
})`
  width: 150px;
  height: 150px;
  margin-top: 50%;
  resize-mode: contain;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;
