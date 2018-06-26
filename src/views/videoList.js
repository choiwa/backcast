var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // console.log(this.collection);
    // this.collection.on('select', function(e) {
    //   this.render();
    // }, this);
  },
  
  render: function() {
    console.log(this.collection);
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideoList, this);
    return this;
  },
  
  renderVideoList: function(video) {
    var videoView = new VideoListEntryView({model: video});
    // console.log(videoView);
    this.$el.append(videoView.render());
  },
  
  template: templateURL('src/templates/videoList.html')

});


// this.$el.append(
//       this.collection.map(function(elem) {
//         new VideoListEntryView({model: elem, el: '.video-list'}).render().el;
//       })
//     );