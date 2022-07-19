import React from "react";
import { Heading, VStack } from 'native-base'

export function SignIn() {
  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Heading color="gray.100" fontSize="lg">Acesse sua conta</Heading>
    </VStack>
  )
}