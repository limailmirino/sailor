/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'events',
  identity: 'Event',
  attributes: {
    id:{
      'type':'integer',
      required:true
    },
    title:{
      type:"string",
      required:true
    },
    description:{
      type:"text"
    },
    location:{
      type:"string"
    },
    start:{
      type:"datetime"
    },
    end:{
      type:"datetime"
    },
    picture:{
      type:"string"
    }
  }
};
