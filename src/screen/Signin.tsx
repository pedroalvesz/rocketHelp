import React from "react";
import { VStack, Heading, Icon, useTheme  } from 'native-base'
import { Envelope, Key} from 'phosphor-react-native'


import Logo from '../assets/logo_primary.svg'
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";

export function SignIn() {

  //Hook que permite usar as cores do theme do native base / do tema que eu alterei
  const  { colors } = useTheme()

  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="lg" mt={20} mb={6}>
        Enter Your Account
      </Heading>

      <Input
      mb={4}
      placeholder="E-mail"
      InputLeftElement={
        <Icon 
        as={<Envelope color={colors.gray[300]} />}
        ml={4}
        />}
      />

      <Input
      mb={8}
      placeholder="Password"
      InputLeftElement={
        <Icon 
        as={<Key color={colors.gray[300]} />}
        ml={4} 
        />}
      secureTextEntry
      />

      <Button title="Login"/>
    </VStack>
  )
}