import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestionId: 1,
  selectedAnswerId: 0,
  currentQuestion: Ember.computed('currentQuestionId', function() {
    let questions = this.get('questions');
    return questions.findBy('id', this.get('currentQuestionId'));
  }),
  didRender() {
  //  this.$().hide().fadeIn(800);
  },
  actions: {
    nextQuestion() {
      if (this.get('currentQuestionId') < this.get('questions').length) {
        this.incrementProperty('currentQuestionId');
      }
    },
    previousQuestion() {
      if (this.get('currentQuestionId') > 1) {
        this.decrementProperty('currentQuestionId');
      }
    },
    selectAnswer() {
      this.set('selectedAnswerId', parseInt(Ember.$(window.event.target).prop('id'), 10));
    }
  }
});
