var utils = require('partial.js/utils');
var builders = require('partial.js/builders');

exports.install = function(framework) {
	framework.route('/', viewDatabase);
};

function viewDatabase() {
	
	var self = this;
	var db = self.app.db();

	db.collections(function(err, data) {

		if (err) {
			self.plain(err.toString());
			return;
		}

		var rows = [];
		data.forEach(function(o) {
			rows.push('collection -> ' + o);
		});

		// Documentation: http://www.partialjs.com/documentation/mongodb/
		db.insert('users', { name: 'Peter', age: 25 }, function(err, data) {
			// DONE
		});		

		// return all rows
		self.plain(rows.join('\n'));
	});
}