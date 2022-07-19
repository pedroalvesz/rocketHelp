import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base'

interface Props extends IButtonProps {
  title: string;
}

export function Button({title, ...rest}: Props ) {
  return(
    <NativeBaseButton
    bg="green.700"
    alignItems="center"
    h={14}
    w="100%"
    py={4}
    {...rest}
    >
      <Heading
      fontFamily="heading"
      fontSize="sm"
      color="white"
      >
        {title}
      </Heading>
    </NativeBaseButton>
  )
}