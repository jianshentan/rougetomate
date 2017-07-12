var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Banner Model
 * =============
 */

var Banners = new keystone.List('Banners', {
  sortable: true,
  singular: "Banner",
  plural: "Banners",
  autokey: { from: 'name', path: 'key', unique: true }
});

Banners.add({
  name: { type: String, required: true },
  images: { type: Types.CloudinaryImages, label: "Add these images here to use below." },
  text: { type: Types.Html, wysiwyg: true, label: "HTML Text (To add an image, add images above, save and then copy the link of the image in the html text below.)" },
  displayStartDate: { type: Date, label: "Display Starts" },
  displayEndDate: { type: Date, label: "Display Ends" },
});

Banners.defaultColumns = 'name, displayStartDate, displayEndDate';
Banners.register();
