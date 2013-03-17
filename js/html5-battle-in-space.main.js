;
console.info('Include: mootools-core-1.4.5-full-compat-yc.js.');
console.info("Include: html5-battle-in-space.main.js.");

require.config({
 paths: {
  main: 'html5-battle-in-space'
 }
});

require(["main/Class_Object2d"],
function( Object2d            ) {
 console.info('Starting... require().');
 document.addEvent('domready', function() {
	console.info('Event: Document ready.');

	var ship = new Object2d(1, 1);

 });// END OF document.addEvent('domready'
});// END OF require
