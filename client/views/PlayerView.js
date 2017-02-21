// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  //el: '<audio controls autoplay />',
  template: _.template('<img src=<%= artwork_url %>> <audio controls autoplay src= <%= url %> />'),

  initialize: function() {
    this.$el.on('ended', function() {
      this.model.ended();
      console.log(this);
    }.bind(this));
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    // return this.$el.attr('src', this.model ? this.model.get('url') : '');
    return this.$el.html(this.template(this.model.attributes));
  }

});
