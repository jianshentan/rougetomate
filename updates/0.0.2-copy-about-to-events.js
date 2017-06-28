/* move 'Upcoming Events' and 'Private Dining' from "About" list to
/"Events" list */

var keystone = require('keystone'),
	async = require('async');

function moveAboutToEvent(about) {

	var Events = keystone.list('Events');

	// console.log(about);
	// console.log(about.key);
	console.log("Copying about " + about.key + " to a new Event...");
	var new_event = new Events.model(about);
	// console.log(new_event);

	new_event.save(function(err) {
		if (err) {
			console.error("Error copying about " + about.key + " to a new Event:");
			console.error(err);
		} else {
			console.log("Copied about " + about.key + " to a new Event:");
			console.log(new_event);

			console.log("Deleting original about " + about.key + "...");
			about.remove(function(err) {
				if (err) {
					console.error("Error deleting original about " + about.key + ":");
					console.error(err);
				} else {
					console.log("Deleted original about " + about.key + ".");
				}
			});
		}
	});

}

exports = module.exports = function(done) {
	var move_abouts = keystone.list('Abouts').model.
										find({ "key" : { $in: ['upcoming-events', 'private-dining'] } });
	// console.log(move_abouts);
	move_abouts.exec( function(err, results) {
		// console.log(err);
		// console.log(results);
		console.log('start moving selected abouts to events');
		// finalize update
		results.forEach(function(about, index) {
			// console.log(about, index);
			moveAboutToEvent(about);
		});
		// finalize update
		done(err);
		console.log('done moving selected abouts to events');
	});
};

exports.options = {
  verbose: true,
  // strict: true
}
