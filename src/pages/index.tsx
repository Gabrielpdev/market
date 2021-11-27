import { useEffect, useState, useCallback } from "react"
import axios from 'axios'
import { Flex, Button } from '@chakra-ui/react';

import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Filters } from "../components/Filters";
import { Product } from "../components/Product";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { Cart } from "../components/Cart";

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

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  function handlePrevPage(){
    setPage(page - 1)
  }

  function handleNextPage(){
    setPage(page + 1)
  }

  const handleSort = useCallback( async (sort: { value: string }) =>{
    setLoading(true)

    const { data } = await axios.get(`http://localhost:3000/api/product?sort=${sort.value}`);

    setProducts(data[0])
    setLoading(false)
  }, [])

  useEffect(() => {
    setLoading(true)
    try{
      fetch(`http://localhost:3000/api/product`)
      .then(res => res.json())
      .then(json => {
        setProducts(json[page - 1])
        setTotalPage(json.length)
        setLoading(false)
      })
    }catch(e){
      console.log(e)
    }
  },[page])

  console.log(products)
  // console.log(totalPage)

  return (
    <Flex
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
        <Filters onSort={handleSort} />

        <Flex  
          mt='44px' 
          align="center"
          justify="space-between"
        >
          {!loading ? (
            <Flex  
              mt='44px'
              align="center"
              justify="space-between"
              css={{
                'gap': '20px',
              }}
            >
              {products?.map(product => {
                if(!product) return null;

                return(
                  <Product key={product.id} {...product} />       
                )
              })}

            </Flex>
          ) : (
            <Loading />
          )}
          <Cart />
        </Flex>

        <Flex
          css={{
            'gap': '20px',
          }}
          m="56px 0"
        >
         {page > 1 && (
            <Button onClick={handlePrevPage}>
              Prev Page
            </Button>
          )}
          {page < totalPage && (
            <Button onClick={handleNextPage}>
              Next Page
            </Button>
          )}
        </Flex>
      </Flex>

      <Footer/>
    </Flex>
  )
}
