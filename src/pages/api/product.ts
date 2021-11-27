import { api } from "../../service/api"

export default async function handler(req, res) {
  const { sort = 'asc' } = req.query;

  const {data} = await api.get(`/products?sort=${sort}`)

  const splittedData = data.map((item, index) => {
    if(index % 3 === 0 ){
      return [item, data[index + 1], data[index + 2]]
    } 
  }).filter(item => item !== undefined)

  res.status(200).json( splittedData )
}
