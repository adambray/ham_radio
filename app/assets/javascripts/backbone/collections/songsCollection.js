App.Collections.Songs = Backbone.Collection.extend({
  initialize: function() {
    console.log('New Songs Collection');
  },
  model: App.Models.Song,
  url: '/songs'
});
