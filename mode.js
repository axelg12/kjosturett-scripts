import replies from './replies.js';
import questions from './questions.js';

let mode = new Array(40).fill(-1);

const answers = {
  1: 'Mjög ósammála',
  2: 'Frekar ósammála',
  3: 'Hlutlaus',
  4: 'Frekar sammála',
  5: 'Mjög sammála',
};

const repliesWith40 = replies.filter((reply) => reply.length === 40);

console.log('replies', replies.length, repliesWith40.length);

mode = mode.map((questionID, idx) => {
  let averageCalc = new Array(5).fill(0);
  repliesWith40.forEach((reply) => {
    const answer = parseInt(reply[idx], 10);
    if (answer !== 6) {
      averageCalc[answer - 1] += 1;
    }
  });
  const totalAnswers = averageCalc.reduce((partial_sum, a) => partial_sum + a, 0);
  // console.log('hlutlaus %', averageCalc[2] / totalAnswers);
  return averageCalc.indexOf(Math.max(...averageCalc));
});

console.log('Algengustu svör');
mode.forEach((answer, idx) => {
  console.log(`Spurning: ${questions[idx].question} - ${answers[answer]}`);
});
