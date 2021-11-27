import { useMemo } from 'react';
import { Box, Flex, Image, Text, Icon } from "@chakra-ui/react";

export function Cart() {
  return (
    <Flex
      position="relative"
    >
      <Flex
        flex="1"
        p="0 14px 75px"
        h="505px"
        w="220px"
        ml="100px"
        maxWidth="220px"
        alignSelf="center"
        color="blue.500"
        bg="white.500"
        borderRadius="8px"
        borderColor="blue.500"
        borderWidth="1px"
        flexDirection="column"
        overflowY="scroll"
      >
        <Box
          mt='14px'
          p="14px"
          w="100%"
          maxWidth="220px"
          color="blue.500"
          position="relative"
          bg="white.500"
          borderRadius="8px"
          borderColor="blue.500"
          borderWidth="1px"
        >
          <Flex>
            <Text
              fontSize="14px"
              fontWeight='bold'
            >
              Name: 
            </Text>
            <Text
              fontSize="14px"
              ml="5px"
            >
              Mens Casual
            </Text>
          </Flex>

          <Flex>
            <Text
              fontSize="14px"
              fontWeight='bold'
            >
              Quantity: 
            </Text>
            <Text
              fontSize="14px"
              ml="5px"
              maxHeight="71px"
            >
              2
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex
        p="14px"
        mt="auto"

        h="68px"
        w="220px"

        alignSelf="center"
        justifyContent="space-between"
        
        color="white.500"
        bg="blue.500"

        borderRadius="8px"

        position="absolute"
        bottom="0"
        right="0"
      >
        <Text
          fontSize="18px"
          fontWeight="bold"
          color="white.500"
        >
          Total: $ 189172.09
        </Text>
      
      </Flex>
    </Flex>
  )
}

