import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";


export function Search() {
  return (
    <Flex
      as="label"
      flex="1"
      p="14px"
      w="312px"
      alignSelf="center"
      color="gray.500"
      position="relative"
      bg="white.500"
      borderColor="blue.500"
      borderRadius="8px"
      borderWidth="1px"
    >
      <Input 
        color="blue.500"
        variant="unstyled"
        placeholder="Search"
        _placeholder={{ color: "gray.500" }}
      />

      <Icon as={RiSearchLine} fontSize="20" color="blue.500"/>
    </Flex>
  )
}

