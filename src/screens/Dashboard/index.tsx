import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import { HighLightCard } from '../../components/HighLightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {

  const [data, setData] = useState<DataListProps[]>([])

  async function loadTransaction() {
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey)
    const transactions = response ? JSON.parse(response) : []

    const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {
      const amount = Number(item.amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date))

      return {
        id: item.id,
        name: item.name,
        amount,
        type: item.type,
        category: item.category,
        date
      }
    })

    setData(transactionsFormatted)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  useFocusEffect(useCallback(() => {
    loadTransaction()
  }, []))

  return (
    <Container>
      <Header>
        <UserWrapper>

          <UserInfo>
            <Photo source={{ uri: 'https://github.com/Welinton-Hoff.png' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Welinton</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => { }}>
            <Icon name="power" />
          </LogoutButton>

        </UserWrapper>

      </Header>

      <HighLightCards>
        <HighLightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 12 de novembro"
        />
        <HighLightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 11 de novembro"
        />
        <HighLightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 12 de novembro"
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />


      </Transactions>

    </Container>
  );
}