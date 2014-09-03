App.Views.SongFormView = Backbone.View.extend({
  el: '#new-song-modal',

  events: {
    'click .submit': 'createSong',
    'click .close': 'closeForm'
  },

  initialize: function() {
  },

  createSong: function() {
    // nest the data in a `song` object, since that's how rails expects it.
    var data = {
      artist:      $('#new-song-artist').val(),
      title:       $('#new-song-title').val(),
      genre:       $('#new-song-genre').val(),
      audio_url:   $('#new-song-audio-url').val(),
      album_art:   $('#new-song-album-art').val()
    };

    App.Collections.songs.create(data, {success: function() {
      App.router.navigate('');

      // clear the form
      $('input').val();

      // fade out the form and scroll the new song into view
      App.Views.songForm.$el.fadeOut(function() {
        $('.song').last().get(0).scrollIntoView();
      });
    }});

  },

  closeForm: function() {
    App.router.navigate('');
    App.Views.songForm.$el.fadeOut();

  }

});
