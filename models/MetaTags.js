var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * MetaTags Model
 * =============
 */

var MetaTags = new keystone.List('Metatags', {
  sortable: true,
  singular: "Meta Tag",
  plural: "Meta Tags",
  autokey: { from: 'name', path: 'key', unique: true }
});

MetaTags.add(
  "Configure meta tags used for search engines and social media:",
  {
    scope: { type: String, required: true, initial: true, label: "Group" } ,
    name: { type: String, required: true, initial: true, label: "Name (must be unique)" } ,
    content: { type: String, label: "Content" } ,
    image: { type: Types.CloudinaryImage, label: "Image (meta tag includes URL)" } ,
    key: { type: Types.Key, initial: false, label: "Tag key (must be unique)" }
  }
);

MetaTags.register();
