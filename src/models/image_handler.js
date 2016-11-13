const axios = require('axios');

module.exports = {
  getImages(callback) {
    return axios.get('/api/images').then((res) => {
      callback(res.data);
    });
  },
  addImage(name, url, callback) {
    axios({
      method: 'post',
      url: '/api/images',
      data: {
        name,
        url,
      },
    })
      .then(() => {
        callback();
      });
  },
  deleteImage(imageId, callback) {
    axios.delete(`/api/images/${imageId}`).then((res) => {
      callback();
    });
  }
};
