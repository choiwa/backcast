var Videos = Backbone.Collection.extend({

  model: Video,
  
  parse: function(data) {
    return data.items;
  },

  search: function(input) {
    this.url = 'https://www.googleapis.com/youtube/v3/search';
    var data = this.fetch({
      data: {
        q: input,
        part: 'snippet',
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video',
      }
      
    });
    return this.parse(data);
  },
  
  
  
});
