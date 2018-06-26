var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    // console.log(window.exampleVideoData)
  },


  render: function() {
    this.$el.html(this.template());
    // new VideoListView();
    // new VideoPlayerView(exampleVideoData[0]);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
