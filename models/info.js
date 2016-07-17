var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Info Model
 * =============
 */

var Info = new keystone.List('Info', {
  sortable: true,
	autokey: { from: 'name', path: 'key', unique: true }
});

Info.add({
	name: { type: String, required: true },
	subtitle: { type: String },
	link: { type: Types.Url },
  showImage: { type: Types.Boolean },
	image: { type: Types.CloudinaryImage, dependsOn: { showImage: true } },
  line1: { type: Types.Text },
  line2: { type: Types.Text },
  line3: { type: Types.Text },
  line4: { type: Types.Text },
  line5: { type: Types.Text },
  line6: { type: Types.Text }
});

Info.register();
