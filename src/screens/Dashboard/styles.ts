import { Platform, FlatList } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { BorderlessButton } from "react-native-gesture-handler";

import { DataListProps } from ".";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}PX;
  background-color: ${({ theme }) => theme.colors.PRIMARY_COLOR};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;
  margin-top: ${RFValue(28)}px;
  margin-bottom: ${RFValue(150)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.SHAPE};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.SHAPE};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.SECUNDARY_COLOR};
  font-size: ${RFValue(24)}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  margin-bottom: 16px;
`;

export const TransactionsList = styled(
  FlatList as new () => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
