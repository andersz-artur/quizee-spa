import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestion: Ember.computed('questions.@each', function() {
    let questions = this.get('questions');
    return questions.findBy('id', 1);
  })
});
