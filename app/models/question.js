import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  correctAnswer: DS.attr('number'),
  choices: DS.attr()
});
