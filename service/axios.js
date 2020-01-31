import axios from 'axios';


const RootPath = 'https://files.sirclocdn.xyz/frontend-test-37';

export const getDataApi = (path) => {
  console.log(path);
  const promise = new Promise((resolve, reject) =>{
    axios.get(`${RootPath}/${path}`)
      .then((result) => {
        resolve(result);
      }, (err) => {
        console.log(err);
        reject(err);
      });           
  });
  return promise;
};
