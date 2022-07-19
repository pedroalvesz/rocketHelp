import {useTheme, HStack, VStack, IconButton, Heading, Text} from 'native-base'
import {SignOut} from 'phosphor-react-native'
import { useState } from 'react'

import Logo from '../assets/logo_secondary.svg'
import { SecondaryButton } from '../Components/SecondaryButton'

export function Dashboard() {
  const { colors } = useTheme()

  const [filter, setFilter] = useState<'open' | 'closed'>('open')

  function handleSetFilter(value: 'open' | 'closed') {
    setFilter(value)
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

      <VStack px={6} py={8}>
        <HStack mb={4} alignItems="center" justifyContent="space-between">
          <Heading
          fontFamily="heading" fontSize="lg" color="gray.100">
            Requests
          </Heading>
          <Text fontFamily="body" fontSize="md" color="gray.300">
            0
          </Text>
        </HStack>

        <HStack alignItems="center" justifyContent="space-between">
          <SecondaryButton
          title="Em Andamento"
          type='open'
          onPress={()=> handleSetFilter('open')}
          isActive={filter === 'open'}
          />

          <SecondaryButton
          title="Finalizados"
          type='closed'
          onPress={()=> handleSetFilter('closed')}
          isActive={filter === 'closed'}
          />
        </HStack>

      </VStack>
      
    </VStack>
  )
}