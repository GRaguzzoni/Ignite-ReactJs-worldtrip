import {Flex, Img, Box, Text} from '@chakra-ui/react'


export function Banner() {
  return (
    
    <Flex 
      bgImage="url('./Background.png')"
      pos="relative"
      bgSize="cover"                
      h="335px"
      w="100%"      
      align="center"
      pl={{
        base: "16px",
        md: "140px"
      }}
      

    >
       <Box paddingLeft="100"
       >
         <Text 
         fontSize="36"
         lineHeight="50px"
         fontWeight="500"
         >
            5 Continentes, <br /> infinitas possibilidades.
         </Text>
         <Text 
         fontSize="20"
         lineHeight="30px"
         mt="20px"
         >
            Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
         </Text>
       
       </Box>
       <Img paddingRight="100"
        src="/Airplane.svg" 
        bottom="-10" 
        pos="absolute" 
        right="140"
       />
      
    </Flex>
      
     
      
    
       
      
      
    
  )
}