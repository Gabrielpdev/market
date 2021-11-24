// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { api } from "../../service/api"

export default async function handler(req, res) {
  const { page } = req.query;

  const {data} = await api.get('/products')
  let products = null;

  const splittedData = data.map((item, index) => {
    if(index % 3 === 0 ){
      return [item, data[index + 1], data[index + 2]]
    }
  }).filter(item => item !== undefined)

  res.status(200).json( splittedData[page-1] )
}
