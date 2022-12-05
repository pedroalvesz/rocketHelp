import { Divider, Heading, HStack, Text, useTheme, VStack } from 'native-base'
import { CircleWavyCheck, ClipboardText, DesktopTower, Hourglass } from 'phosphor-react-native'
import { useRoute } from '@react-navigation/native'


import { Button } from '../Components/Button'
import { Header } from '../Components/Header'

interface RouteParams {
  orderId: string
}

interface Props {
  status: 'open' | 'closed'
}

export function Details({status}: Props) {

  const {colors} = useTheme()
  const statusColor = status === 'open' ? colors.secondary[700] : colors.green[300];

  const route = useRoute()

  const {orderId} = route.params as RouteParams

  return(
    <VStack flex={1} bg="gray.700" pb={8}>
      <Header bg="gray.600" pt={12} px={8}/>

      <HStack 
      bg="gray.500"
      w="100%"
      h={14}
      alignItems="center"
      justifyContent="center"
      >
      {
        status === 'open'
        ? <Hourglass size={22} color={statusColor}/>
        : <CircleWavyCheck size={22} color={statusColor}/>
      }
      {
        status === 'open'
        ? <Heading pl={2} fontFamily="heading" fontSize="md" color={statusColor}>
          OPEN
          </Heading>
        : <Heading pl={2} fontFamily="heading" fontSize="md" color={statusColor}>
          CLOSED
          </Heading>
      }
      </HStack>

      <VStack flex={1} bg="gray.700" px={5} py={5}>

        <VStack mb={5} p={5} w="100%" bg="gray.600" rounded="sm">
          <HStack mb={2}>
            <DesktopTower size={20} color={colors.primary[700]}/>
            <Text pl={2} color="gray.300">EQUIPMENT</Text>
          </HStack>
          <Text color="gray.100" fontSize="md">Patrimony</Text>
        </VStack>

        <VStack mb={5} p={5} w="100%" bg="gray.600" rounded="sm">
          <HStack mb={2}>
            <ClipboardText size={20} color={colors.primary[700]}/>
            <Text pl={2} color="gray.300">PROBLEM DESCRIPTION</Text>
          </HStack>
          <Text color="gray.100" fontSize="md">Patrimony</Text>
          <Divider my={3} bg="gray.500"/>
          <Text color="gray.300">Registered in</Text>
        </VStack>

        <VStack mb={5} p={5} w="100%" bg="gray.600" rounded="sm">
          <HStack mb={2}>
            <CircleWavyCheck size={20} color={colors.primary[700]}/>
            <Text pl={2} color="gray.300">SOLUCTION</Text>
          </HStack>
          <Text color="gray.100" fontSize="md">Patrimony</Text>
        </VStack>

        <Button title="Finish"/>
      </VStack>
    </VStack>
  )
}