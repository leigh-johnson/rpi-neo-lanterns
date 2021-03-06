/**
* Strand.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    numLEDs: {
      type: 'integer',
      required: true,
      defaultsTo: 44
    },
    leds: {
      type: 'array',
      required: true,
    },
    active: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};

