App.Router = Backbone.Router.extend({
  routes: {
    "":               "index",
    "songs/new":      "new",
    "songs/:id/play": "play"
  },

  initialize: function() {
    App.Collections.songs = new App.Collections.Songs();
    App.Collections.queue = new App.Collections.Songs();

    App.Views.songForm = new App.Views.SongFormView();
    App.Views.player = new App.Views.PlayerView();
    App.Views.queue = new App.Views.QueueView({
      collection: App.Collections.queue
    });
    App.Views.library = new App.Views.SongListView({
      collection: App.Collections.songs
    });
  },

  index: function() {
    App.Collections.songs.fetch({reset: true});
    $("#new-song-modal").hide();
  },

  new: function() {
    App.Collections.songs.fetch({reset: true});
    $("#new-song-modal").fadeIn();
  },

  play: function(id) {
    song = new App.Models.Song({id: id});
    song.fetch({success: function() {
      App.Views.player.setSong(song);
    }});
  }
});
