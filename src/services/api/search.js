import axios from 'axios';

const search = (payload, callback) => {
  axios
    .post('http://localhost:3000/api/search', payload, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err.respoonse);
    });
};

export { search };
