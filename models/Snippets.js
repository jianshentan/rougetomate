var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Snippets Model
 * =============
 */

var Snippets = new keystone.List('Snippets', {
  sortable: true,
  /* autokey: { from: 'name', path: 'key', unique: true } */
});

Snippets.add({
  name: { type: String, initial: true, required: true },
  images: { type: Types.CloudinaryImages, label: "Add these images here to use below." },
  text: { type: Types.Html, wysiwyg: true, label: "HTML Text (To add an image, add images above, save and then copy the link of the image in the html text below.)" },
  key: { type: Types.Key, initial: true, label: "Lookup key (must be unique)", unique: true, required: true },
  scope: { type: Types.Key, initial: true, label: "Lookup scope (for grouping)", required: true }
});

Snippets.register();
