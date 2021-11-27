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
  const [totalProducts, setTotalProducts] = useState([]);
  const [products, setProducts] = useState<ProductProps[]>([]);

  const [loading, setLoading] = useState(true);

  const [ rating, setRating] = useState(null);
  const [ sort, setSort] = useState(null);

  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  function handlePrevPage(){
    setPage(page - 1)
    setProducts(totalProducts[page - 1])
  }

  function handleNextPage(){
    setPage(page + 1)
    setProducts(totalProducts[page + 1])
  }

  const handleSort = useCallback((sort) =>{
    setSort(sort)
  }, [])

  const handleRating = useCallback((rating) =>{
    setRating(rating)
  }, [])

  useEffect(() => {
    setLoading(true)
    let rate = ''
    let sorting = ''

    try{
      if(rating?.value){
        rate = `&rating=${rating?.value}`
      }

      if(sort?.value){
        sorting = `sort=${sort?.value}`
      }

      fetch(`http://localhost:3000/api/product?${sorting}${rate}`)
      .then(res => res.json())
      .then(products => {
        setPage(1)
        setTotalProducts(products)
        setProducts(products[0])
        setTotalPage(products.length - 1)
        setLoading(false)
      })
    }catch(error){
      console.log(error)
    }
  },[rating, sort])
  
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
        <Filters
          sort={sort}
          rating={rating}
          onRating={handleRating} 
          onSort={handleSort}
        />

        <Flex  
          mt='44px' 
          align="center"
          justify="space-between"
          flexDirection={["column", "column", "column", "row"]}
        >
          {!loading ? (
            <Flex  
              mt='44px'
              align="center"
              justify="center"
              w={["100%", "100%", "700px", "700px"]}
              flexDirection={["column", "column", "row", "row"]}
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
         {page >= 1 && !loading &&  (
            <Button onClick={handlePrevPage}>
              Prev Page
            </Button>
          )}
          {page < totalPage && !loading && (
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
