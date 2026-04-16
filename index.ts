import { maskValue } from "./tasks/credit-card-mask";
import { findTheMissingLetter } from "./tasks/find-the-missing-letter";
import { USERS, sortUserByStatus } from "./tasks/who-is-online";
import { generateMessage } from "./tasks/who-likes-it";
import { sortString } from "./tasks/your-order-please";

console.log("Who’s Online?", sortUserByStatus(USERS));
console.warn("////////////////////////");

console.log(maskValue("4556364607935616"));
console.log(maskValue("64607935616"));
console.log(maskValue("1"));
console.log(maskValue(""));
console.log(maskValue("00112233"));
console.log(maskValue("Banana"));
console.warn("////////////////////////");

console.log("sortString:", sortString("is2 Thi1s T4est 3a"));
console.log("sortString:", sortString("4of Fo1r pe6ople g3ood th5e the2"));
console.log("sortString:", sortString(""));
console.warn("////////////////////////");

console.log(findTheMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findTheMissingLetter(["O", "Q", "R", "S"]));
console.log(findTheMissingLetter(["O", "Q"]));
console.warn("//////////");

console.log('Expected: "Peter likes this", Real:', generateMessage(["Peter"]));
console.log(
  'Expected: "Jacob and Alex like this", Real:',
  generateMessage(["Jacob", "Alex"]),
);
console.log(
  'Expected: "Max, John and Mark like this", Real:',
  generateMessage(["Max", "John", "Mark"]),
);
console.log(
  'Expected: "Alex, Jacob and 2 others like this", Real:',
  generateMessage(["Alex", "Jacob", "Mark", "Max"]),
);
