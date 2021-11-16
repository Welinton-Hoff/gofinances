import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.SHAPE};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}PX;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;

export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}PX;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  
  color: ${({ theme, type }) =>
    type === 'positive' ? theme.colors.SUCESS : theme.colors.ATTENTION};
  
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}PX;
  color: ${({ theme }) => theme.colors.TEXT};
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}PX;
  color: ${({ theme }) => theme.colors.TEXT};
  margin-left: 17px;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}PX;
  color: ${({ theme }) => theme.colors.TEXT};
`;