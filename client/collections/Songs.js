// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  initialize: function() {
    this.fetch();
  },
  parse: function(data) {
    return data.results;
  },

  search: function(searchTerm) {
    let baseUrl = this.url;
    let params = `?where={"title":{"$regex":"${searchTerm}"}}`;
    this.url = baseUrl + params;
    this.fetch();
    this.url = baseUrl;
  }
});