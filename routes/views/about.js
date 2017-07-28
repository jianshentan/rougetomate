var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.navMenuItemKey is used to set the currently selected
  // item in the header navigation.
  locals.navMenuItemKey = 'about';

  // Lookup the selected item by key
  view.on('init', function(next) {
    var q = keystone.list('Abouts').model.findOne({ key: req.params.key });

    q.exec(function(err, result) {
      if (result != null) {
        locals.about = result;
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, no page could be found at this address (404)'));
      }
      next(err);
    });
  });

  // Render the view
  if ( req.isMobile ) {
    view.render('m_about', { layout: "mobile" });
  } else {
    view.render('about');
  }


};
