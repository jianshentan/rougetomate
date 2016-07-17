var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var GalleryImages = new keystone.List('Galleryimages', {
  sortable: true,
  singular: "Gallery Image",
  plural: "Gallery Images",
	autokey: { from: 'name', path: 'key', unique: true }
});

GalleryImages.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	image: { type: Types.CloudinaryImage }
});

GalleryImages.register();
