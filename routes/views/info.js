var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = '';
		
	// Load the galleries by sortOrder
  view.query('info', keystone.list('Info').model.find().sort( 'sortOrder') );
	
  // Render the view
  if( req.isMobile ) {
    view.render('m_info', { layout: 'mobile' } );
  } else {
    view.render('info');
  }
	
}
