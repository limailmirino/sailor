/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'users',
  attributes: {
		username:{
      type:"string",
      required:true
    },
		name:{
      type:"string",
      required:false
    },
		surname:{
      type:"string",
      required:false
    },
  }
};
