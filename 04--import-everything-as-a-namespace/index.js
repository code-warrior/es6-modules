/* Import everything as a namespace import. */
import * as dogs from "./dogs.js";

console.log(`I have a dog: ${dogs.getFirstDogName()}.`);
console.log(`${dogs.getFirstDogName()} is a ${dogs.getFirstDogBreed()} and is ${dogs.getFirstDogAge()} years old.`);
console.log(`She does a lot of 💩`);

console.log(`---`);

dogs.setSecondDogName(`Bubbles`);
console.log(`If I got a second dog, I’d name them ${dogs.getSecondDogName()}`)
