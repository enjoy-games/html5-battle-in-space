;
define([], function() {

	var Point2d = new Class({
		initialize: function(x, y) {
			this.x = x;
			this.y = y;

			console.info('Create: Instance of Point2d.');
			console.info(this);
		}
	});

	console.info('Include: Class_Point2d.js.');
	return Point2d;
});
