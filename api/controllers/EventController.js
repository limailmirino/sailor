/**
 * EventController
 *
 * @description :: Server-side logic for managing Events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  function(req, res) {

    Event.find().exec(function (err, eventList){

      if (err) {
        return res.negotiate(err);
      }

      sails.log('Extracted %d events from the DB.', eventList.length);
      return res.json(eventList);

    });

  },
  all: function(req, res) {
    res.send("All the events with " + req.method);
  },

  error: function(req, res) {
    res.json(500, {
      error: 'message'
    });
  },

  single: function(req, res) {

    Event.find({'id':''}).exec(function (err, eventList){

      if (err) {
        return res.negotiate(err);
      }

      sails.log('Extracted %d events from the DB.', eventList.length);
      return res.json(eventList);

    });

  }
};
