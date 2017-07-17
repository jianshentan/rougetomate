var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.navMenuItemKey is used to set the currently selected
  // item in the header navigation.
  locals.navMenuItemKey = 'gallery';

  // Load the galleries by sortOrder
  view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));

  // Render the view
  view.render('gallery');

};
