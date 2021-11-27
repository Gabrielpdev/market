import { Flex, Image, Text, Icon } from "@chakra-ui/react";

export function Loading() {
  return (
    <Flex
      flex="1"
      p="14px"
      minHeight="555px"
      w="700px"
      color="blue.500"
      justify="center"
      align="center"
    >
      <Text>
        Loading...
      </Text>
    </Flex>
  )
}

