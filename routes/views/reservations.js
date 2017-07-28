var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.navMenuItemKey is used to set the currently selected
  // item in the header navigation.
  locals.navMenuItemKey = 'reservations';

  // Render the view
  if ( req.isMobile ) {
    view.render('m_reservations', { layout: 'mobile' } );
  } else {
    view.render('reservations');
  }

}
