import {Flex, Box} from '@chakra-ui/react';

export function Divider({...props}) {
  return (
    <Flex 
      w="100%"
      justify="center"
      {...props}
    >
      <Box w="150px" h="2px" bg ="gray.600" />
    </Flex>
  )
}