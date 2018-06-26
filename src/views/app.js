var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    // new VideoPlayerView().render();
    // console.log(window.exampleVideoData)
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({el: '.list', collection: this.videos}).render();
    new VideoPlayerView({el: '.player', collection: this.videos, model: this.videos.models[0]}).render();
    new SearchView({el: '.search', collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
