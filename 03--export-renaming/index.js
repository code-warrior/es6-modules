/* Import the renamed function. */
import { sayLoudly } from "./renamed-exported-function.js";

// Or rename locally
// import { sayLoudly as shoutLoudly } from "./renamed-exported-function.js";

// import { shout, sayLoudly } from "./renamed-exported-function.js";

console.log(sayLoudly());
// console.log(shoutLoudly());

// console.log(shout());
