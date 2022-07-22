import { useState } from 'react'
import {useTheme, HStack, VStack, IconButton, Heading, Text, FlatList, Center} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import {ChatTeardropText, SignOut} from 'phosphor-react-native'


import Logo from '../assets/logo_secondary.svg'
import { Button } from '../Components/Button'
import { Order, OrderProps } from '../Components/Order'
import { SecondaryButton } from '../Components/SecondaryButton'

export function Dashboard() {
  const { colors } = useTheme()
  const navigation = useNavigation()


  const [filter, setFilter] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState<OrderProps[]>([])

  function handleSetFilter(value: 'open' | 'closed') {
    setFilter(value)
  }

  function handleNewOrder() {
    navigation.navigate('new')
  }

  function handleShowDetails(orderId: string) {
    navigation.navigate('details', {orderId})
  }

  return(
    <VStack flex={1} bg="gray.700">
      <HStack
      w="full"
      px={6}
      pt={16}
      pb={6}
      bg="gray.600"
      alignItems="center"
      justifyContent="space-between"
      >
        <Logo/>
        <IconButton
        icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack px={6} py={8} flex={1} justifyContent="space-between">
        <HStack mb={4} alignItems="center" justifyContent="space-between">
          <Heading
          fontFamily="heading" fontSize="lg" color="gray.100">
            Requests
          </Heading>
          <Text fontFamily="body" fontSize="md" color="gray.300">
            0
          </Text>
        </HStack>

        <HStack mb={8} alignItems="center" justifyContent="space-between">
          <SecondaryButton
          title="Opened"
          type='open'
          onPress={()=> handleSetFilter('open')}
          isActive={filter === 'open'}
          />

          <SecondaryButton
          title="Closed"
          type='closed'
          onPress={()=> handleSetFilter('closed')}
          isActive={filter === 'closed'}
          />
        </HStack>

        <FlatList
        mb={4}
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Order data={item} onPress={() => handleShowDetails(item.id)} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        ListEmptyComponent={() => (
          <Center>
            <ChatTeardropText color={colors.gray[300]} size={60}/>
            <Text
            pt={6}
            textAlign="center"
            fontSize="lg"
            color="gray.300"
            >
              You have {'\n'} no {filter === 'open' ? 'opened' : 'closed'} orders.
              </Text>
          </Center>
        )}
        />

        <Button
        onPress={handleNewOrder}
        title="New Order"/>
      </VStack>
    </VStack>
  )
}