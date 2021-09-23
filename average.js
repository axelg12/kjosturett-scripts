import replies from './replies.js';
import questions from './questions.js';

let average = new Array(40).fill(-1);

const repliesWith40 = replies.filter((reply) => reply.length === 40);

// console.log('replies', replies.length, repliesWith40.length);

const answers = {
  1: 'Mjög ósammála',
  2: 'Frekar ósammála',
  3: 'Hlutlaus',
  4: 'Frekar sammála',
  5: 'Mjög sammála',
};

average = average.map((questionID, idx) => {
  let averageCalc = 0;
  repliesWith40.forEach((reply) => {
    averageCalc += parseInt(reply[idx], 10);
  });
  return averageCalc / repliesWith40.length;
});

const rounded = average.map((a) => Math.round(a));

console.log('Meðaltal (námundað að næsta svari)');
rounded.forEach((answer, idx) => {
  console.log(`Spurning: ${questions[idx].question} - ${answers[answer]}`);
});
