App.Models.Song = Backbone.Model.extend({
  initialize: function(){
    console.log('New Song Model Created');
  },
  urlRoot: '/songs'
});
