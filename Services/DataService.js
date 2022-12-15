import axios from "axios"
import DataClient from "./DataClient";


export const getInfo = async() => {
  const tokenId = 'cb3be967de1f'
  
  return DataClient
  .get(``, {
    headers: {
      'Authorization': `Token cb3be967de1f`
    }
  })
    .then(async(res) => { 

      const info = res.data
      const summary = JSON.parse(info)
      return summary
    })
    .catch((err) => {
      console.log(`register error`, err.response);
     
      throw err 
  });
};
    