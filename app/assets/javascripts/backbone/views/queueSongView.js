App.Views.QueueSongView = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    this.template = HandlebarsTemplates['songs/queueSong'];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
