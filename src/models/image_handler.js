const axios = require('axios');

module.exports = {
  addImage() {
    axios({
      method: 'post',
      url: '/api/images',
    })
      .then((res) => {
        console.log(res);
      });
  },
};
