require('./index.scss');
const template = require('./index.html');
const ImageHandler = require('../../models/image_handler');

module.exports = {
  name: 'cmp-image-list',
  properties: {
    template,
    methods: {
      onAddImageFormSubmit() {
        ImageHandler.addImage(this.name, this.url);
      },
    },
    data() {
      return {
        name: '',
        url: '',
      };
    },
  },
};
