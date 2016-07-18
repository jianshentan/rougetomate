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
    usePdf: { type: Types.Boolean, default: false, label: "Uplaod a pdf instead of the using the sections to populate the menu" },
    pdfPreview: { type: Types.CloudinaryImages, label: "Preview (png/jpg)", dependsOn: { usePdf: true } },
    pdf: { type: Types.CloudinaryImage, label: "Downloadable PDF", dependsOn: { usePdf: true } }
  },
  "Menu Intro Section",
  {
    title: { type: String },
    description: { type: Types.Html, wysiwyg: true, label: "Description" }
  },
  'Section One', {
    display1: { type: Types.Boolean, label: "Show Section", default: true },
    title1: { type: Types.Text, label: "Section Title", dependsOn: { display1: true } },
    description1: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display1: true } },
    menuitems1: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display1: true } }
  },
  'Section Two', {
    display2: { type: Types.Boolean, label: "Show Section", default: true },
    title2: { type: Types.Text, label: "Section Title", dependsOn: { display2: true } },
    description2: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display2: true } },
    menuitems2: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display2: true } }
  },
  'Section Three', {
    display3: { type: Types.Boolean, label: "Show Section", default: true },
    title3: { type: Types.Text, label: "Section Title", dependsOn: { display3: true } },
    description3: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display3: true } },
    menuitems3: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display3: true } }
  },
  'Section Four', {
    display4: { type: Types.Boolean, label: "Show Section", default: false },
    title4: { type: Types.Text, label: "Section Title", dependsOn: { display4: true } },
    description4: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display4: true } },
    menuitems4: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items",  dependsOn: { display4: true } }
  },
  'Section Five', {
    display5: { type: Types.Boolean, label: "Show Section", default: false },
    title5: { type: Types.Text, label: "Section Title", dependsOn: { display5: true } },
    description5: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display5: true } },
    menuitems5: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display5: true } }
  },
  'Section Six', {
    display6: { type: Types.Boolean, label: "Show Section", default: false },
    title6: { type: Types.Text, label: "Section Title", dependsOn: { display6: true } },
    description6: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display6: true } },
    menuitems6: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display6: true } }
  },
  'Section Seven', {
    display7: { type: Types.Boolean, label: "Show Section", default: false },
    title7: { type: Types.Text, label: "Section Title", dependsOn: { display7: true } },
    description7: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display7: true } },
    menuitems7: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display7: true } }
  },
  'Section Eight', {
    display8: { type: Types.Boolean, label: "Show Section", default: false },
    title8: { type: Types.Text, label: "Section Title", dependsOn: { display8: true } },
    description8: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display8: true } },
    menuitems8: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display8: true } }
  },
  'Section Nine', {
    display9: { type: Types.Boolean, label: "Show Section", default: false },
    title9: { type: Types.Text, label: "Section Title", dependsOn: { display9: true } },
    description9: { type: Types.Html, wysiwyg: true, label: "Description", height: 100, dependsOn: { display9: true } },
    menuitems9: { type: Types.Relationship, ref: 'Menuitems', many: true, label: "Menu Items", dependsOn: { display9: true } }
  }
);

Menus.register();
