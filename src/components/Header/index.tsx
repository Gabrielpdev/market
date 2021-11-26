import { Flex, Text, Link, Image } from '@chakra-ui/react';

export function Header() {
  return (
  <Flex
    w='100vw'
    align="center"
    justify="space-between"
    p='30px 60px'
  >
    <Text
      fontWeight='bold'
      fontSize="24px"
    >
      Market
    </Text>

    <Flex
      width="100%"
      maxWidth={360}
      align="center"
      justify="center"
    >
      <Link fontWeight="400" href="#">
        Store
      </Link>
      <Link ml="28px" fontWeight="400" href="#">
        My Account
      </Link>
    </Flex>

      <Image 
        src="https://bit.ly/sage-adebayo" 
        alt="Segun Adebayo"
        h='35px'
        w='35px'
        borderRadius='50%'
        backgroundColor='blue.500'
      />
   </Flex>
  )
}