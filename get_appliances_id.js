const fetch = require('node-fetch');
require('dotenv').config();
const url = "https://api.nature.global/1/appliances";
const options = {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json; charset=utf-8"
  }
};

(async () => {
  try {
    const response = await fetch(url, options);
    await response.json().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });;
  } catch (error) {
    console.log(error);
  }
})();