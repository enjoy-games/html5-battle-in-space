;
define( ['./Class_Point2d'],
function( Point2d         ) {

	var Object2d = new Class({
		initialize: function(x, y) {
			this.center_point = new Point2d(x, y);

			console.info('Create: Instance of Object2d.');
			console.info(this);
		}
	});

	console.info('Include: Class_Object2d.js.');
	return Object2d;
});
