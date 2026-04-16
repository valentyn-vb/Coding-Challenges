//Who’s Online?

const USERS: UsersI[] = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

interface UsersI {
  username: string;
  status: status;
  lastActivity: number;
}

interface SORTED_USERS {
  online?: string[];
  offline?: string[];
  away?: string[];
}

type status = "online" | "offline";

function sortUserByStatus(users: UsersI[]) {
  return users.reduce((acc, user) => {
    const { status, lastActivity } = user;
    if (status === "online") {
      lastActivity <= 10
        ? (acc.online = [...(acc.online || []), user.username])
        : (acc.away = [...(acc.away || []), user.username]);
    }

    if (status === "offline") {
      acc.offline = [...(acc.offline || []), user.username];
    }

    return acc;
  }, {} as SORTED_USERS);
}

console.log("🚀 ~sortUserByStatus():", sortUserByStatus(USERS));

console.warn("////////////////////////");
// Who’s Online? end

// Credit Card Mask

function maskValue(value: string) {
  if (value.length <= 4) return value;

  let unVisiblePart = "";
  let visiblePart = value.substring(value.length - 4, value.length + 1);

  for (let i = 1; i <= value.length - 4; i++) {
    unVisiblePart += "#";
  }

  return {
    originalValue: value,
    displayedValue: unVisiblePart + visiblePart,
  };
}

console.log(maskValue("4556364607935616")); // "############5616"
console.log(maskValue("64607935616")); // "#######5616"
console.log(maskValue("1")); // "1"
console.log(maskValue("")); // ""
console.log(maskValue("00112233")); // "#######5616"
console.log(maskValue("Banana")); // "#######5616"

console.warn("////////////////////////");

// Credit Card Mask End

//Your order, please

function sortString(value: string) {
  if (!value.length) return "";

  const res = value.split(" ");
  const sortedArray = [...res];
  res.map((word) => {
    const letters = word.split("");
    const index = letters.find((letter) => !!Number(letter)) as any;
    sortedArray.splice(index - 1, 1, word);
  });
  console.log("🚀 ~ sortString ~ sortedArray:", sortedArray);

  return sortedArray.join(" ");
}
console.log("sortString: ", sortString("is2 Thi1s T4est 3a"));
console.log("sortString: ", sortString("4of Fo1r pe6ople g3ood th5e the2"));
console.log("sortString: ", sortString(""));
console.warn("////////////////////////");

// Find the missing letter

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const findTheMissingLetter = (arr) => {
  const findRegister =
    arr[0] === arr[0].toUpperCase() ? "toUpperCase" : "toLowerCase";

  let missingLetter = "";

  const findFirstLetterIndex = alphabet.findIndex(
    (el) => el === arr[0].toUpperCase(),
  );
  const findLastLetterIndex = alphabet.findIndex(
    (el) => el === arr[arr.length - 1].toUpperCase(),
  );

  const updateAlp = alphabet.slice(
    findFirstLetterIndex,
    findLastLetterIndex + 1,
  );

  updateAlp.map((el) => {
    if (!arr.includes(el?.[findRegister]())) {
      missingLetter = el?.[findRegister]();
    }
  });

  return missingLetter;
};

console.log(findTheMissingLetter(["a", "b", "c", "d", "f"]));

console.log(findTheMissingLetter(["O", "Q", "R", "S"]));

console.log(findTheMissingLetter(["O", "Q"]));

console.warn("//////////");
