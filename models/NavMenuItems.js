var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * NavMenuItems Model
 * =============
 */

var NavMenuItems = new keystone.List('Navmenuitems', {
  sortable: true,
  autokey: { from: 'name', path: 'key', unique: true }
});

NavMenuItems.add({
	name: { type: String, required: true },
	link: { type: Types.Url },
  key: { type: Types.Key, initial: false, label: "key (must be unique)" }
});

NavMenuItems.register();
