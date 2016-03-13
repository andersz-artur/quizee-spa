import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let questions = [
          {
            id: 1,
            question: "Who is the author of The Witcher?",
            choices: ["Krzysztof Sienkiewicz","Andrzej Sapkowski","Tomasz Bagiński","Adam Mickiewicz"],
            correctAnswer: 1
          },
          {
            id: 2,
            question: "Is Ciri Gerlat's doughter?",
            choices: ["Yes","No"],
            correctAnswer: 1
          },
          {
            id: 3,
            question: "Who is the creator of The Witcher video games?",
            choices: ["Techland","EA","CD Projekt Red","People Can Fly"],
            correctAnswer: 2
          }
        ];
        return questions;
    }
});
