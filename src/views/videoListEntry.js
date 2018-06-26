var VideoListEntryView = Backbone.View.extend({
  
  
  initialize: function() {
    
  },
  
  render: function() {
    // console.log(this.model);
    this.$el.html(this.template(this.model));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')
  

});
