// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  initialize: function() {
    this.fetch({
      success: function(data) {
        this.add(data.models);
      }.bind(this),
      error: function(data) {
        console.log('failed');
      }
    });
  },
  parse: function(data) {
    return data.results;
  }

});