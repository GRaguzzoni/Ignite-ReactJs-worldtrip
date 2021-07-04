import {Flex, Img, Box, Center} from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"      
      h="90px"
      align="center"
      mx="auto"
      mt="1"
      px="6"
      justify="center"
    >     
    <Box>
      <Img src="/Logo.svg"alt="World trip" />     
    </Box>
       
      
      
    </Flex>
  )
}