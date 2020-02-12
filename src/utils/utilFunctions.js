
import birdsData from '../data';

function changeAnswerOptions(level) {
  const arrayOfAnswerOptions = [];
  Object.values(birdsData)[level].map((object) => {
    arrayOfAnswerOptions.push(object.name);
  });
  return arrayOfAnswerOptions;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export { changeAnswerOptions, getRandomInt };
