var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'events';

  // Lookup the selected item by key
  view.query('event', keystone.list('Events').model.findOne({ key: req.params.key }));

  // Render the view
  if ( req.isMobile ) {
    view.render('m_event', { layout: "mobile" });
  } else {
    view.render('event');
  }


};
