import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import theme from "../../global/styles/theme";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({ theme }) => theme.colors.PRIMARY_COLOR};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const CategoryList = styled.FlatList`
  flex: 1;
  width: 100%;
` as unknown as typeof FlatList;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.SHAPE};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive }) =>
    isActive ? theme.colors.SECUNDARY_COLOR_LIGHT : theme.colors.BACKGROUND};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.TEXT};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
