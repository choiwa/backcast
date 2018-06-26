var SearchView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  events: {
    'click button': 'clickHandler',
    
  },
  
  clickHandler: function(e) {
    var input = this.$('input').val();
    this.collection.search(input);
    this.$('input').val('');
  },

  template: templateURL('src/templates/search.html')

});
