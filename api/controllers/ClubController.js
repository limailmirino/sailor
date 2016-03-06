/**
 * ClubController
 *
 * @description :: Server-side logic for managing clubs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	error: function(req, res) {
		Club.create({name:'Liquid Bar'}).exec(function createCB(err, created){
			console.log('Created club with name ' + created.name);
		});
	},

};
