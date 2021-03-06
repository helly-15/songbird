
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

function findBirdDescription(arrayOfObjects,birdName){
  const result = arrayOfObjects.find( ({ name }) => name === birdName );
  return result.description
}

export { changeAnswerOptions, getRandomInt, findBirdDescription };
