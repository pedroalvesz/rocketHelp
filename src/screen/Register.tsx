import { VStack, useTheme, } from 'native-base'
import { Button } from '../Components/Button'
import { Header } from '../Components/Header'
import { Input } from '../Components/Input'

export function Register() {
  return(
    <VStack flex={1} bg="gray.600" px={8} py={8}>
      <Header/>
      <Input
      mb={4}
      placeholder="Patrimony Number"
      />

      <Input
      placeholder="Describe your problem"
      flex={1}
      textAlignVertical="top"
      multiline
      />

      <Button mt={6} title="Register"/>

    </VStack>
  )
}