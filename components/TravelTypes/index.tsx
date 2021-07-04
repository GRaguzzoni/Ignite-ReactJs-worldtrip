import {Flex, Box, Text, Image} from '@chakra-ui/react'

export function TravelTypes() {
  return (
    <Flex
      justify="space-around"
      flexWrap="wrap"
      direction="row"
      align="center"
      px="20px"
    >
      <Box     
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Image src="/cocktail.svg" alt=""/>
        <Text color="gray.600" mt="24px" fontWeight="500">vida noturna</Text>
      </Box>
      <Box
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Image src="/surf.svg" alt=""/>
        <Text color="gray.600" mt="24px" fontWeight="500">praia</Text>
      </Box>
      <Box
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Image src="/building.svg" alt=""/>
        <Text color="gray.600" mt="24px" fontWeight="500">moderno</Text>
      </Box>
      <Box
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Image src="/museum.svg" alt=""/>
        <Text color="gray.600" mt="24px" fontWeight="500">clássico</Text>
      </Box>
      <Box
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Image src="/earth.svg" alt=""/>
        <Text color="gray.600" mt="24px" fontWeight="500">e mais...</Text>
      </Box>
    </Flex>
  )
}