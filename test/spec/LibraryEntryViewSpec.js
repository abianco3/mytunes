describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
  /*it ('plays clicked songs', function() {
    sinon.spy(SongModel.prototype, 'play');

    view.$el.children().first().click();
    expect(model.play).to.have.been.called;

    SongModel.prototype.play.restore();
  });*/

  it('queues clicked songs', function() {
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$el.children().first().click();
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });
  it('does not queue duplicates', function() {
    
    library = new Songs([
      {
        url: 'mp3s/08 4 Page Letter.mp3',
        title: '4 Page Letter',
        artist: 'Aaliyah'
      },
      {
        url: 'mp3s/11 We Need A Resolution.mp3',
        title: 'We Need A Resolution',
        artist: 'Aaliyah'
      },
      {
        url: 'mp3s/A Third Song.mp3',
        title: 'The Third Song',
        artist: 'Aaliyah'
      }
    ]);
    // playerView is created in AppView initialize
    // access with appView.playerView
    appView = new AppView({model: new AppModel({library: library})});
    var songQueue = appView.model.get('songQueue');
    // Click song once
    var libraryView = appView.libraryView;
    console.log(libraryView);
    libraryView.$el.children()[1].children[0].click();
    // Click song again
    libraryView.$el.children()[1].children[0].click();
    expect(songQueue.length).to.equal(1);
  });

});
