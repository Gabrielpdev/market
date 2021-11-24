import { useEffect } from "react"
import { Flex, Button, Stack } from '@chakra-ui/react';

import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Filters } from "../components/Filters";
import { Product } from "../components/Product";

export default function Home() {

  useEffect(() => {
    fetch('http://localhost:3000/api/product?page=3')
      .then(res=>res.json())
      .then(json=>console.log(json))

  },[])

  return (
    <Flex
      w='100vw'
      h='100vh'
      align="center"
      justify="center"
      flexDir="column"
    >
      <Header />
      <Flex
        align="center"
        justify="center"
        flexDir="column"
      >
        <Search />

        <Filters />
        <Flex
          mt='44px'
          align="center"
          justify="center"
        >
          <Product />       
        </Flex>
      </Flex>
    </Flex>
  )
}
