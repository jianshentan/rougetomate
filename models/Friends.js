var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Friends Model
 * =============
 */

var Friends = new keystone.List('Friends', {
  sortable: true,
  autokey: { from: 'name', path: 'key', unique: true }
});

Friends.add({
	name: { type: String, required: true },
	link: { type: Types.Url }
});

Friends.register();