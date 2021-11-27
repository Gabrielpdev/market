import { api } from "../../service/api"

export default async function handler(req, res) {
  const { sort = 'asc', rating } = req.query;

  let {data} = await api.get(`/products`)

  // I made this config because the API is not returning the correct data
  if(sort === 'desc'){
    data.sort((a, b) => a.price - b.price)
  }

  if(sort === 'asc'){ 
    data.sort((a, b) => b.price - a.price)
  }

  // I made this config because the API is not having this data
  if(rating){
    const filteredData = data.filter((item) => rating >= Math.floor(item.rating.rate))
    data = filteredData
  }

  const splittedData = data.map((item, index) => {
    if(index % 3 === 0 ){
      return [item, data[index + 1], data[index + 2]]
    } 
  }).filter(item => item !== undefined)

  res.status(200).json( splittedData )
}
