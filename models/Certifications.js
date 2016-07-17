var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Certs Model
 * =============
 */

var Certifications = new keystone.List('Certifications', {
  sortable: true,
  autokey: { from: 'name', path: 'key', unique: true }
});

Certifications.add({
	name: { type: String, required: true },
	link: { type: Types.Url },
	icon: { type: Types.CloudinaryImage, label: "icons must be square" }
});

Certifications.register();