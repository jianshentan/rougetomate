var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.navMenuItemKey is used to set the currently selected
  // item in the header navigation.
  locals.navMenuItemKey = 'events';

  // Load the items by sortOrder
  view.query('events', keystone.list('Events').model.find().sort('sortOrder'));

  // Render the view
  if ( req.isMobile ) {
    view.render('m_events', { layout: "mobile" });
  } else {
    view.render('events');
  }

};
