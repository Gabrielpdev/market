import { useMemo } from 'react';
import { Box, Button, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductProps {
  id: number;
  title: string;
  price:string,
  category:string,
  description:string,
  image:string,
  rating: {
    rate: number;
  }
}

export function Product(product: ProductProps) {
  const starNumber = useMemo(
    () => Array.from(
      { length: 5 },
      (_, index) => {
        if(Math.floor(product.rating.rate) > index) {
          return true
        } else {
          return false
        }
      },
    ),
    [product.rating.rate],
  );

  return (
    <Flex
      flex="1"
      p="14px"
      h="555px"
      w="100%"
      maxWidth="220px"
      alignSelf="center"
      color="blue.500"
      position="relative"
      bg="white.500"
      borderRadius="8px"
      borderColor="blue.500"
      borderWidth="1px"
      flexDirection="column"
    >
      <Image
        src={product.image} 
        alt="Segun Adebayo"
        width="100%"
        maxHeight="215px"
        m="auto"
      />
      
      <Text
        fontWeight='bold'
        fontSize="18px"
        mt="8px"
      >
        {product.title}
      </Text>

      <Box
        mt="5px"
      >
        <Text
          fontWeight='bold'
        >
          Description: 
        </Text>

        <Text
          fontSize="12px"
          maxHeight="71px"
          d='-webkit-box'
          overflow="hidden"
          textOverflow="ellipsis"
          css={{
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
          }}
        >
          {product.description}
        </Text>
      </Box>

      <Flex
        align="center"
          mt="5px"
      >
        <Text
          fontWeight='bold'
        >
          Rating:
        </Text>
        {starNumber.map((star, index) => {
          if(star){
            return <Icon key={index} as={AiFillStar} fontSize="20" color="orange.500"/>
          }
          return <Icon key={index} as={AiOutlineStar} fontSize="20" color="orange.500"/>
        })}
      </Flex>

      <Flex
        mt="5px"
      >
        <Text
          fontWeight='bold'
        >
          Price: 
        </Text>
        <Text
          fontSize="12px"
          ml="5px"
          maxHeight="71px"
        >
          {`$ ${product.price}`}
        </Text>
      </Flex>

      <Button
        mt="10px"
        bg="blue.500"
        color="white.500"
      >
        Add to Cart
      </Button>
    </Flex>
  )
}

