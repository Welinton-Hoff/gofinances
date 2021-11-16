import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.SECUNDARY_COLOR : theme.colors.SHAPE};
    
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.SHAPE : theme.colors.TEXT_DARK};
`;

export const Icon = styled(Feather) <TypeProps>`
  font-size: ${RFValue(40)}px;

  ${(type) => type.type === "up" && css`
    color: ${({ theme }) => theme.colors.SUCESS};
  `}

  ${(type) => type.type === "down" && css`
    color: ${({ theme }) => theme.colors.ATTENTION};
  `}

  ${(type) => type.type === "total" && css`
    color: ${({ theme }) => theme.colors.SHAPE};
  `}  
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.SHAPE : theme.colors.TEXT_DARK};

  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(12)}px;

  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.SHAPE : theme.colors.TEXT};
`;