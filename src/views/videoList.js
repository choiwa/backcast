var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.forEach(function(elem) {
      new VideoListEntryView({model: elem});
    });
    
    this.render();
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
