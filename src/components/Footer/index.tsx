import { Flex, Text } from '@chakra-ui/react';

export function Footer() {
  return (
  <Flex
    w='100vw'
    align="center"
    justify="center"
    p="23px 0"

    borderColor="blue.500"
    borderTopWidth="1px"
  >
    <Text
      fontWeight='400'
      fontSize="12px"
    >
      @2021 - Marketplace
    </Text>
   </Flex>
  )
}