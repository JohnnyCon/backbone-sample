
var jit = jit || {};
jit.model = jit.model || {};
jit.collection = jit.collection || {};
jit.view = jit.view || {};

jit.app = jit.app || {};
jit.app.KeyMap = jit.app.KeyMap || {};


// initialize application
$(function(){

  jit.app.KeyMap = {
    "Enter":13,
    "Aha": 61,
    "Huh": 47
  };
  jit.app.LivePageEvents = {
    "QuestionAdded" : "jit:QuestionAdded",
    "QuestionUpVoted" : "jit:QuestionUpVoted"
  };

  jit.app.broker = jit.app.broker || {};
  _.extend(jit.app.broker, Backbone.Events);

  new jit.view.LiveCourse({ broker: jit.app.broker });
  new jit.view.QuestionList({ broker: jit.app.broker });
});
