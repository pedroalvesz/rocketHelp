import { Box, Circle, Heading, HStack, Text, useTheme, VStack, Pressable, IPressableProps} from 'native-base'
import { CircleWavyCheck, ClockAfternoon, Hourglass } from 'phosphor-react-native';


export interface OrderProps {
  id: string;
  patrimony: string;
  date: string;
  status: 'open' | 'close';
}

interface Props extends IPressableProps {
  data: OrderProps;
}

export function Order({data, ...rest}: Props) {

  const { colors } = useTheme();

  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];

  return(
    //Age como uma div clicavel
    <Pressable>
      <HStack
      bg="gray.600"
      w="full"
      h="88px"
      rounded="sm"
      overflow="hidden"
      mb={4}
      >
        <Box h="full" w={2} bg={statusColor}/>

        <HStack px={5} flex={1} alignItems="center" justifyContent="space-between">
          <VStack>
            <Heading fontFamily="heading" fontSize="md" color="gray.100">
              Patrimony {data.patrimony}
            </Heading>

            <HStack>
            <ClockAfternoon size={15} color={colors.gray[200]}/>

            <Text pl={1} fontSize="xs" color="gray.200">
              {data.date}
            </Text>
            </HStack>
            
          </VStack>

          <Circle bg="gray.500" w={12} h={12}>
            {data.status === 'open' ? <Hourglass size={24} color={statusColor}/> : <CircleWavyCheck size={24} color={statusColor}/> }
          </Circle>
        </HStack>

      </HStack>
    </Pressable>
  )
}