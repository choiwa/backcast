var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    // new VideoPlayerView().render();
    // console.log(window.exampleVideoData)
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({el: '.list', collection: exampleVideoData}).render();
    // new VideoListView({model: exampleVideoData, el: '.list'}).render();
    // new VideoPlayerView(exampleVideoData[0]);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
