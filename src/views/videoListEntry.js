var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {

  },
  
  render: function() {
    // console.log(this.model);
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  events: {
    'click': 'handleClick'
  },
  
  handleClick: function(e) {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')
  

});
