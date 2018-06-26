var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // console.log(this.collection)
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.map(this.renderVideoList, this);
    return this;
  },
  
  renderVideoList: function(video) {
    var videoView = new VideoListEntryView({model: video}).render();
    this.$el.children().append(videoView);
  },
  
  template: templateURL('src/templates/videoList.html')

});


// this.$el.append(
//       this.collection.map(function(elem) {
//         new VideoListEntryView({model: elem, el: '.video-list'}).render().el;
//       })
//     );