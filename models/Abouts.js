var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var Abouts = new keystone.List('Abouts', {
  sortable: true,
  autokey: { from: 'name', path: 'key', unique: true }
});

Abouts.add({
  name: { type: String, required: true },
  images: { type: Types.CloudinaryImages, label: "Add these images here to use below." },
  text: { type: Types.Html, wysiwyg: true, label: "HTML Text (To add an image, add images above, save and then copy the link of the image in the html text below.)" },
  key: { type: Types.Key, initial: false, label: "URL key (must be unique)" }
});

Abouts.register();
