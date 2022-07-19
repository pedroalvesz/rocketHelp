import {HStack, IconButton, Heading, useTheme, IStackProps} from 'native-base'
import { CaretLeft } from 'phosphor-react-native'

export function Header({...rest} : IStackProps) {
  const {colors} = useTheme()

  return(
    <HStack
    w="100%"
    h={140}
    pt={12}
    pb={6}
    alignItems="center"
    {...rest}
    >
      <IconButton
      icon={<CaretLeft size={24} color={colors.gray[100]}/>}
      />
      <Heading flex={1} textAlign="center" ml={-12} fontFamily="heading" color="gray.100"> Solicitation </Heading>
    </HStack>
)
}