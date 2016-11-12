const axios = require('axios');

module.exports = {
  addImage(name, url) {
    axios({
      method: 'post',
      url: '/api/images',
      data: {
        name,
        url,
      },
    })
      .then((res) => {
        console.log(res);
      });
  },
};
