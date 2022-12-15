import axios from "axios"


export const getInfo = async() => {
  axios.get('https://api.sbx.hipcam.com/web/reporter/summary/', {
    headers: {
      'Authorization': `Token cb3be967de1f`
    }
  })
    .then((res) => {
      console.log(res.data)
      const info = res.data
      const summary = JSON.parse(info)
      return summary
    })
    .catch((error) => {
      console.log(`register error`, e.response);
      throw "error"
    })
};