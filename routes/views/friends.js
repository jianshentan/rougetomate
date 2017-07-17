var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.navMenuItemKey is used to set the currently selected
  // item in the header navigation.
  locals.navMenuItemKey = 'friends';

  // Load the items by sortOrder
  view.query('friends', keystone.list('Friends').model.find().sort('sortOrder'));

  // Render the view
  if ( req.isMobile ) {
    view.render('m_friends', { layout: 'mobile' } );
  } else {
    view.render('friends');
  }

};
