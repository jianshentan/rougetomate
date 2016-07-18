var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Menu Model
 * =============
 */

var Menus = new keystone.List('Menus', {
  sortable: true,
  track: true,
	autokey: { from: 'name', path: 'key', unique: true }
});

Menus.add(
  "Menu Info",
  {
    name: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    splashImage: { type: Types.CloudinaryImage }
  }, 
  "Menu PDF Option",
  {
    usePdf: { type: Types.Boolean, default: false, label: "Upload pdf instead of the using the sections to populate the menu" },
    pdfPreview: { type: Types.CloudinaryImages, label: "Preview (png/jpg)", dependsOn: { usePdf: true } },
    pdf: { type: Types.CloudinaryImage, label: "Downloadable PDF", dependsOn: { usePdf: true } }
  },
  { heading: 'Menu Intro Section', dependsOn: { usePdf: false } },
  //"Menu Intro Section",
  {
    title: { type: String },
    description: { type: Types.Html, wysiwyg: true, label: "Description" }
  },
  'Section One', {
    display1: { type: Types.Boolean, label: "Show Section", default: true, dependsOn: { usePdf: false } },
    title1: { type: Types.Text, label: "Section Title", dependsOn: { display1: true, usePdf: false } },
    description1: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display1: true, usePdf: false } },
    menuitems1: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display1: true, usePdf: false } }
  },
  'Section Two', {
    display2: { type: Types.Boolean, label: "Show Section", default: true, dependsOn: { usePdf: false } },
    title2: { type: Types.Text, label: "Section Title", dependsOn: { display2: true, usePdf: false } },
    description2: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display2: true, usePdf: false } },
    menuitems2: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display2: true, usePdf: false } }
  },
  'Section Three', {
    display3: { type: Types.Boolean, label: "Show Section", default: true, dependsOn: { usePdf: false } },
    title3: { type: Types.Text, label: "Section Title", dependsOn: { display3: true, usePdf: false } },
    description3: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display3: true, usePdf: false } },
    menuitems3: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display3: true, usePdf: false } }
  },
  'Section Four', {
    display4: { type: Types.Boolean, label: "Show Section", default: false, dependsOn: { usePdf: false } },
    title4: { type: Types.Text, label: "Section Title", dependsOn: { display4: true, usePdf: false } },
    description4: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display4: true, usePdf: false } },
    menuitems4: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items",  dependsOn: { display4: true, usePdf: false } }
  },
  'Section Five', {
    display5: { type: Types.Boolean, label: "Show Section", default: false, dependsOn: { usePdf: false } },
    title5: { type: Types.Text, label: "Section Title", dependsOn: { display5: true, usePdf: false } },
    description5: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display5: true, usePdf: false } },
    menuitems5: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display5: true, usePdf: false } }
  },
  'Section Six', {
    display6: { type: Types.Boolean, label: "Show Section", default: false, dependsOn: { usePdf: false } },
    title6: { type: Types.Text, label: "Section Title", dependsOn: { display6: true, usePdf: false } },
    description6: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display6: true, usePdf: false } },
    menuitems6: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display6: true, usePdf: false } }
  },
  'Section Seven', {
    display7: { type: Types.Boolean, label: "Show Section", default: false, dependsOn: { usePdf: false } },
    title7: { type: Types.Text, label: "Section Title", dependsOn: { display7: true, usePdf: false } },
    description7: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display7: true, usePdf: false } },
    menuitems7: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display7: true, usePdf: false } }
  },
  'Section Eight', {
    display8: { type: Types.Boolean, label: "Show Section", default: false, dependsOn: { usePdf: false } },
    title8: { type: Types.Text, label: "Section Title", dependsOn: { display8: true, usePdf: false } },
    description8: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display8: true, usePdf: false } },
    menuitems8: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display8: true, usePdf: false } }
  },
  'Section Nine', {
    display9: { type: Types.Boolean, label: "Show Section", default: false, dependsOn: { usePdf: false } },
    title9: { type: Types.Text, label: "Section Title", dependsOn: { display9: true, usePdf: false } },
    description9: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display9: true, usePdf: false } },
    menuitems9: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display9: true, usePdf: false } }
  }
);

Menus.register();
