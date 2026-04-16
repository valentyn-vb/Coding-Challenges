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

function sortUserByStatus() {
  return USERS.reduce((acc, user) => {
    const { status, lastActivity } = user;
    console.log("🚀 ~ sortUserByStatus ~ lastActivity:", lastActivity);
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

console.log("🚀 ~sortUserByStatus():", sortUserByStatus());
