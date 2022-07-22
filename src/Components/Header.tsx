import {HStack, IconButton, Heading, useTheme, StyledProps} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { CaretLeft } from 'phosphor-react-native'

export function Header({...rest} : StyledProps) {
  const {colors} = useTheme()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }


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
      w="24px"
      h="24px"
      onPress={handleGoBack}
      icon={<CaretLeft size={24} color={colors.gray[100]}/>}
      />
      <Heading flex={1} textAlign="center" ml={-12} fontFamily="heading" color="gray.100"> Solicitation </Heading>
    </HStack>
)
}