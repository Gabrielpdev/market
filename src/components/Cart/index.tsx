import { useMemo } from 'react';
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";

import { useCart } from '../../context/cart';

export function Cart() {
  const { removeCart, cart }  = useCart();


  function handleRemoveProduct(id: number){
    removeCart(id);
  }

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  },[cart])

  return (
    <Flex
      position="relative"
    >
      <Flex
        flex="1"
        p="0 14px 75px"
        h="505px"
        w="220px"
        ml={["0", "0", "0px", "100px"]}
        mt={["20px", "20px", "20px", "0px"]}
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
        {cart.map(product => (
          <Box
            key={product.id}
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
            s
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
                w="105px"
                
                d='-webkit-box'
                overflow="hidden"
                textOverflow="ellipsis"
                css={{
                  '-webkit-line-clamp': '1',
                  '-webkit-box-orient': 'vertical',
                }}
              >
                {product.name}
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
                {product.quantity}
              </Text>
            </Flex>

            <Icon
              position="absolute"
              right="5px"
              top="10px"
              cursor="pointer"
              onClick={() => handleRemoveProduct(product.id)}
              as={BsTrash} 
              fontSize="16" 
              color="red.500"
            />
          </Box>
        ))}
      </Flex>

      <Flex
        p="14px"
        mt="auto"

        h="68px"
        w="220px"

        align="center"
        justifyContent="center"
        
        color="white.500"
        bg="blue.500"

        borderRadius="8px"

        position="absolute"
        bottom="0"
        right="0"
      >
        <Text
          textAlign="center"
          w="100%"
          fontSize="18px"
          fontWeight="bold"
          color="white.500"
        >
          {`Total: $ ${totalPrice.toFixed(2)}`}
        </Text>
      </Flex>
    </Flex>
  )
}

