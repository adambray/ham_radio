App.Views.PlayerView = Backbone.View.extend({
  el: '#player',

  initialize: function() {
    this.template = HandlebarsTemplates['songs/player'];
    this.clearSong();
  },

  events: {
    'ended audio': 'test'
  },

  clearSong: function(song) {
    this.model = new App.Models.Song();
    this.render();
  },

  setSong: function(song) {
    App.router.navigate("songs/" + song.id + "/play");
    this.model = song;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.find('audio').on('ended', this.playNext.bind(this));
  },

  play: function() {
    this.el.getElementsByTagName('audio')[0].play();
  },

  playNext: function() {
    var nextSong = App.Views.queue.getNextSong();
    if (nextSong) {
      this.setSong(nextSong);
    }
    else {
      this.clearSong();
    }
  },

  idle: function() {
    return !this.model.get('audio_url');
  }
});
