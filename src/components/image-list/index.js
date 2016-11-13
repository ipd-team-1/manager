require('./index.scss');
const template = require('./index.html');
const ImageHandler = require('../../models/image_handler');

module.exports = {
  name: 'cmp-image-list',
  properties: {
    template,
    data() {
      return {
        form: {
          name: '',
          url: '',
        },
        images: [],
      };
    },
    methods: {
      onAddImageFormSubmit() {
        if (this.form.name === '' || this.form.url === '') return;
        ImageHandler.addImage(this.form.name, this.form.url, () => {
          this.getImages();
        });
        this.form.name = '';
        this.form.url = '';
      },
      onDeleteImageClicked(image) {
        ImageHandler.deleteImage(image._id, () => {
          this.getImages();
        });
      },
      getImages() {
        ImageHandler.getImages((images) => {
          this.images = images;
        });
      },
    },
    mounted() {
      this.getImages();
    },
  },
};
