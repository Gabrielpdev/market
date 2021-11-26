import { Flex, Image, Text } from "@chakra-ui/react";

export function Product() {
  return (
    <Flex
      flex="1"
      p="14px"
      w="200px"
      alignSelf="center"
      color="blue.500"
      position="relative"
      bg="white.500"
      borderColor="blue.500"
      borderRadius="8px"
      borderWidth="1px"
      flexDirection="column"
    >
      <Image
        src="https://bit.ly/sage-adebayo" 
        alt="Segun Adebayo"
        mt="13px"
      />
      
      <Text
        fontWeight='bold'
        fontSize="18px"
        mt="8px"
      >
        Mens Casual
      </Text>

      <Text
        mt="5px"
      >
        <Text
          fontWeight='bold'
        >
          Description: 
        </Text>
        <Text
          fontSize="12px"
          mt="5px"
          maxHeight="71px"
          // whiteSpace='nowrap'
          d='-webkit-box'
          overflow="hidden"
          textOverflow="ellipsis"
          css={{
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
          }}
        >
          Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.
          Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.
          Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.
        </Text>
      </Text>
    </Flex>
  )
}

