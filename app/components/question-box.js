import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestionId: 1,
  userChoicesTable: [],
  selectedAnswerId: -1,
  userResult: 0,
  isFinished: false,
  isAnswerCorrect: Ember.computed('selectedAnswerId', function() {
    return this.get('currentQuestion').correctAnswer === this.get('selectedAnswerId');
  }),
  currentQuestion: Ember.computed('currentQuestionId', function() {
    let questions = this.get('questions');
    let userAnswer = this.get('userChoicesTable')[this.get('currentQuestionId') - 1];
    if (userAnswer) {
      this.set('selectedAnswerId', userAnswer)
    }
    return questions.findBy('id', this.get('currentQuestionId'));
  }),
  actions: {
    nextQuestion() {
      if(this.get('selectedAnswerId') < 0) {
        alert('Select answer');
        return;
      }

      this.get('userChoicesTable')[this.get('currentQuestionId') - 1] = this.get('selectedAnswerId');
      console.log(this.get('userChoicesTable'));

      if (this.get('currentQuestionId') < this.get('questions').length) {
        this.$().hide().fadeIn(800);
        this.incrementProperty('currentQuestionId');
        this.set('selectedAnswerId', -1)
      } else {
        let userAnswers = this.get('userChoicesTable');
        let questions = this.get('questions');
        let result = 0;
        userAnswers.forEach(function(element, index) {
          if (questions[index].correctAnswer === element) {
            result++;
          }
        });
        this.set('userResult', result);
        this.set('isFinished', true);
      }
    },
    previousQuestion() {
      if (this.get('currentQuestionId') > 1) {
        this.$().hide().fadeIn(800);
        this.decrementProperty('currentQuestionId');
      }
    },
    selectAnswer() {
      this.set('selectedAnswerId', parseInt(Ember.$(window.event.target).prop('id'), 10));
      console.log(this.get('isAnswerCorrect'))
    }
  }
});
