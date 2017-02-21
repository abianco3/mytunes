// PlayerView.js - Defines a backbone view class for the music player.
var SearchView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  tagName: 'form',
  //template: _.template('<img src=<%= artwork_url %>> <audio controls autoplay src= <%= url %> />'),
  className: 'search',

  events: {
    'submit': function(event) {
      event.preventDefault();
      this.collection.search((this.$el.find('input').val()));
      this.$el.find('input').val('');
      return false;
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = [
      '<input type="text">',
      '<button type="submit">Search</button>'
    ].join('');
    console.log(this);
    return this.$el.html(html);
    //return this.$el.html(this.template(this.model.attributes));
  }

});
