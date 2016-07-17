var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Mobile Gallery Model
 * =============
 */

var MobileGalleryImages = new keystone.List('Mobilegalleryimages', {
  sortable: true,
  singular: "Mobile Gallery Image",
  plural: "Mobile Gallery Images",
	autokey: { from: 'name', path: 'key', unique: true }
});

MobileGalleryImages.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	image: { type: Types.CloudinaryImage }
});

MobileGalleryImages.register();
