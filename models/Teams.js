var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Teams Model
 * =============
 */

var Teams = new keystone.List('Teams', {
  sortable: true,
  autokey: { from: 'name', path: 'key', unique: true }
});

Teams.add({
	name: { type: String, required: true },
	firstName: { type: String },
	lastName: { type: String },
	thumbnail: { type: Types.CloudinaryImage, label: "Thumbnail Image. NOTE: Uploaded image must be 350X350px"  },
	image: { type: Types.CloudinaryImage, label: "Main Image. NOTE: Uploaded image must be 1280X600px" },
	position: { type: String },
	biography: { type: Types.Textarea }
});

Teams.register();