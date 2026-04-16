export function generateMessage(users: string[]): string {
  let result = "";

  if (!users.length) {
    result = "no one likes this";
  } else if (users.length === 1) {
    result = `${users[0]} likes this`;
  } else if (users.length === 2) {
    result = `${users[0]} and ${users[1]} like this`;
  } else if (users.length === 3) {
    result = `${users[0]}, ${users[1]} and ${users[2]} like this`;
  } else {
    result = `${users[0]}, ${users[1]} and ${users.length - 2} others like this`;
  }

  return result;
}
