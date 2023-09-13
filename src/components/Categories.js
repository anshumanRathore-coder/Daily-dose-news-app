// import chakra ui
import { Button } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export default function Categories(props) {
    const capitalize=(str)=>{
      return str[0].toUpperCase()+str.slice(1)
    }
    const handleClick=()=>{
        props.toggleCategory(props.categoryName)
    }
    
  return (
    <>
     <Button  onClick={handleClick} leftIcon={props.showIcon?<CloseIcon boxSize="8px"/>:undefined} colorScheme={props.showIcon?"red":"teal"} variant="solid">
            {capitalize(props.categoryName)}
    </Button>
    </>
  )
}
