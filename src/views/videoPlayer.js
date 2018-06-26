var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    // this.render();
    this.listenTo(this.collection, 'select', this.newModel);
  },
  
  newModel: function(selected) {
    this.model = selected;
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  

  template: templateURL('src/templates/videoPlayer.html')

});
