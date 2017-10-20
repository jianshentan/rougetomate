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
  autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: 'group'
});

MetaTags.add(
  "Configure meta tag (used by search engines and social media):",
  {
    name: { type: String, required: true, initial: true, label: "Title" } ,
    tag_name: { type: String, required: true, initial: true, label: "Tag Name (must be unique)" } ,
    content: { type: String, label: "Tag Content" } ,
    image: { type: Types.CloudinaryImage, label: "Image (overrides Tag Content)" } ,
    is_hidden: { type: Types.Boolean, label: "Hide Tag?" } ,
    group: { type: String, required: true, initial: true, label: "Tag Group" } ,
    docs: { type: String, label: "Documentation" }
  }
);

MetaTags.defaultColumns = 'name,tag_name,content,group'

MetaTags.register();
