import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestionId: 1,
  currentQuestion: Ember.computed('currentQuestionId', function() {
    let questions = this.get('questions');
    return questions.findBy('id', this.get('currentQuestionId'));
  }),
  didRender() {
   this.$().hide().fadeIn(800); 
  },
  actions: {
    nextQuestion() {
      this.incrementProperty('currentQuestionId');
    },
    previousQuestion() {
      this.decrementProperty('currentQuestionId');
    }
  }
});
