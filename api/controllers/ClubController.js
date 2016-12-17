/**
 * ClubController
 *
 * @description :: Server-side logic for managing clubs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	function(req, res) {

    Club.find().exec(function (err, clubList){

      if (err) {
        return res.negotiate(err);
      }

      sails.log('Extracted %d clubs from the DB.', clubsList.length);
      return res.json(clubsList);

    });

  },

	error: function(req, res) {
		Club.create({name:'Liquid Bar'}).exec(function createCB(err, created){
			console.log('Created club with name ' + created.name);
		});
	},

};
