// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);
    });
  },
  
  playFirst: function() {
    //return _.first(this.collection);
    this.at(0).play();
  }
});