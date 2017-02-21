// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  initialize: function() {
    
  },
  parse: function(data) {
    return data.songs;
  }

});