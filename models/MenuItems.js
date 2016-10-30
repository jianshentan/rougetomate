var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Menu Model
 * =============
 */

var MenuItems = new keystone.List('Menuitems', {
  sortable: true,
  track: true,
  singular: "Menu Item",
  plural: "Menu Items",
	autokey: { from: 'name', path: 'key', unique: true }
});

MenuItems.add({
	name: { type: String, required: true },
	displayName: { type: String },
  showCost: { type: Types.Boolean, default: true },
  cost: { type: Types.Money, format: '$0,0.00', dependsOn: { showCost: true } },
  description: { type: Types.Text }
});

MenuItems.register();
