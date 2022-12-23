import axios from 'axios';
import LogInClient from './LogInClient';

export const loginEntry = async (userState) => {
  console.log(userState)
  return LogInClient
    .post(``, {
        headers: {
            "Content-Type": `application/json`
          },
      ...userState
    })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(`error`, e.response);
      throw "error"
    });
};