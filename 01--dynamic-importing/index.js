import { sayMyName } from "./name.js";

/*
  • Note that index.js is importing name.js.
  • Imports — or dynamic imports — must appear at the top.
  • Use the relative module specifier, “./”, to import modules.
  • The function “sayMyName()” is available for use locally.
  • You need a host to use modules. (Loading index.html in your browser won’t work.)
 */

console.log(`${sayMyName()} is from which TV show?`);
