var keystone = require('keystone');

exports = module.exports = function(req, res) {

  // if request is sent with a menuitem_id param
  if( req.query.menuitem_id ) {

    // look for Menuitem from id
    keystone.list('Menuitems').model.find()
        .where('_id', req.query.menuitem_id )
        .exec( function( err, menuitem ) {
      res.json( menuitem );
    });

  } else {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // locals.navMenuItemKey is used to set the currently selected
    // item in the header navigation.
    locals.navMenuItemKey = 'menus';

    // Load the menus by sortOrder
    view.query('menus', keystone.list('Menus').model.find().sort('sortOrder'));

    // Render the view
    if ( req.isMobile ) {
      view.render('m_menu', { layout: 'mobile' } );
    } else {
      view.render('menu');
    }
  }


}
