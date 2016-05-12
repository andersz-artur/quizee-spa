import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  if (arguments.length < 2) {
    throw new Error("Handlebars Helper equal needs 2 parameters");
  }

  let arg1 = params[0];
  let arg2 = params[1];

  return arg1===arg2;
});
