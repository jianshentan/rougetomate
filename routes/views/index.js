var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.navMenuItemKey is used to set the currently selected
  // item in the header navigation.
  locals.navMenuItemKey = '';

  // Load the banner contents
  view.query('banners', keystone.list('Banners').model.find({
    displayStartDate: {
      $lte: Date.now()
    } ,
    displayEndDate: {
      $gt: Date.now()
    }
  }).sort('sortOrder'));

  // Render the view
  if ( req.isMobile ) {
    // Load the galleries by sortOrder
    view.query('mobilegalleryimages', keystone.list('Mobilegalleryimages').model.find().sort('sortOrder'));

    view.render('m_index', { layout: 'mobile' } );
  } else {
    // Load the galleries by sortOrder
    view.query('galleryimages', keystone.list('Galleryimages').model.find().sort('sortOrder'));

    view.render('index');
  }

};
