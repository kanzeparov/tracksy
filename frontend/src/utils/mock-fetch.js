import testArray from './test.json';

export default async function getCards() {
  return new Promise((resolve, reject) => {

    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(testArray);
    }, 400);
  }).then((data) => {
   return data
  });
}
