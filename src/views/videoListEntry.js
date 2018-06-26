var VideoListEntryView = Backbone.View.extend({
  
  
  initialize: function() {
    // console.log(exampleVideoData);
    // var videoEntry = new Video(window.exampleVideoData[0]);
    // console.log(this.model.snippet)
    
    this.render();
  },
  
  
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')
  

});
