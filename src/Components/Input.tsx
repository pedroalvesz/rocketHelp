//Meio de renomear o componente nativo para não conflitar com o nome do componente criado
// IInputProps maneira de acessar as props de outro lugar, além de despejar as propriedades dele no elemento
import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({...rest}: IInputProps) {
  return(
    <NativeBaseInput
    width="100%"
    h={14}
    bg="gray.700"
    borderWidth={0}

    fontFamily="body"
    fontSize="md"
    color="gray.200"
    placeholderTextColor="gray.300"
    p={4}
    _focus={{
      borderWidth: 1,
      borderColor: "green.500",
      bg: "gray.700"
    }}
    {...rest}
    />
  )
}