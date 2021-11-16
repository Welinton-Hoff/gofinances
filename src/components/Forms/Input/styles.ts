import styled from 'styled-components/native'
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(14)}px;
  
  color: ${({ theme }) => theme.colors.TEXT_DARK};
  background-color: ${({ theme }) => theme.colors.SHAPE};
  border-radius: 5px;

  margin-bottom: 8px;
`;