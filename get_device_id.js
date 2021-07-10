const fetch = require('node-fetch');
require('dotenv').config();
const url = "https://api.nature.global/1/devices";
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
      console.log("気温: " + res[0].newest_events.te.val);
      console.log("湿度: " + res[0].newest_events.hu.val);
      console.log("照度: " + res[0].newest_events.il.val);
      console.log("人感: " + res[0].newest_events.mo.val);
    }).catch((err) => {
      console.log(err);
    });;
  } catch (error) {
    console.log(error);
  }
})();