import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    tryAgain() {
      window.location.reload();
    }
  }
});
