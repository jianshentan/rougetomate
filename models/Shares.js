var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Shares Model
 * =============
 */

var Shares = new keystone.List('Shares', {
  sortable: true,
  autokey: { from: 'name', path: 'key', unique: true }
});

Shares.add(
  "Configure image/description for when you share the website:",
  {
    name: { type: String, required: true },
    image: { type: Types.CloudinaryImage, label: "Share Image (This image MUST be 1200W x 630H pixels)" },
    description: { type: Types.Text, label: "Share Description" }
  }
);

Shares.register();
