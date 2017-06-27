var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'Events';

  // Render the view
  if (req.isMobile) {

    // Load the galleries by sortOrder
    view.query('events', keystone.list('Events').model.find().sort('sortOrder'));
    
    view.render('m_events', { layout: "mobile"});
  }
  else {

    // Load the galleries by sortOrder
    view.query('events', keystone.list('Events').model.find().sort('sortOrder'));

    view.render('events');
  }


};
