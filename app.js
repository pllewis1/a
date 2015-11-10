var PostCollection = Backbone.Collection.extend({
  url: "http://tiny-starburst.herokuapp.com/collections/posts"
});



var PostView = Backbone.View.extend({
  template: _.template($("#postTemplate").html()),

  events: {
  "keypress #post" : "handleEnter"
},

render: function(){
  this.$el.html(this.template());
  return this;
},

handleEnter: function(event){
  if(event.keyCode === 13)
    this.collectPost();
  else
    return;
},
  collectPost: function(event){

        var title = $('#title').val();
        var post = $('#post').val();


          if( $("#title").val() === ""|| $('#post').val() === "" ){
              alert("Fill out the damn form, ya goober!");
            }
            else {


              this.collection.create({
                "newpost": {
                  "title" : title,
                  "body": post
                }
              });
            }
          }


});

var collection = new PostCollection();

var postView = new PostView({collection:collection});
  $("main").append(postView.render().$el);
