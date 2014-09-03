App.Views.SongView = Backbone.View.extend({
  className: 'song',
  tagName: 'div',

  initialize: function() {
    this.template = HandlebarsTemplates['songs/song'];
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
    'click': 'addToQueue'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  updatePlayer: function() {
    App.Views.player.setSong(this.model);
  },

  addToQueue: function() {
    App.Views.queue.addSong(this.model);
  }
});
