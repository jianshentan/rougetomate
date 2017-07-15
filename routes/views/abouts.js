var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'about';

  // Load the items by sortOrder
  view.query('abouts', keystone.list('Abouts').model.find().sort('sortOrder'));

  // Render the view
  if ( req.isMobile ) {
    view.render('m_abouts', { layout: "mobile" });
  } else {
    view.render('abouts');
  }

};
