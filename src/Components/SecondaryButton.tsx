import {useTheme, Button, IButtonProps, Text} from 'native-base'

interface Props extends IButtonProps {
  title: string
  isActive: boolean;
  type: 'open' | 'closed'
} 

export function SecondaryButton({title, isActive = false, type, ...rest}: Props) {


  //Maneira de manipular o componente no Native Base dependendo se ele está ativado ou não, dependendo do tipo, igual eu fazia com o styled components

  const {colors} = useTheme()
  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300]

  return(
    <Button
    w={155}
    h={9}
    bg="gray.600"
    alignItems="center"
    size="sm"

    borderWidth={isActive ? 1 : 0}
    borderColor={colorType}
    {...rest}
    >
      <Text
      fontFamily="body" 
      fontSize="sm" 
      textTransform="uppercase"
      color={isActive ? colorType : "gray.300"}
      >
        {title}
      </Text>
    </Button>
  )
}