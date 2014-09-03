App.Views.QueueView = Backbone.View.extend({
  el: '#queue',
  initialize: function() {
    this.template = HandlebarsTemplates['songs/queue'];
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'reset', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(song) {
    var view = new App.Views.QueueSongView({ model: song });
    view.$el.appendTo(this.$el.find('ul'));
  },

  addSong: function(song) {
    this.collection.add(song);
    if (App.Views.player.idle()) {
      App.Views.player.playNext();
    }
  },

  getNextSong: function() {
    return this.collection.shift();
  }
});
