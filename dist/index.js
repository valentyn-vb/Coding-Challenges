"use strict";
const USERS = [
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
    }, {});
}
console.log("🚀 ~sortUserByStatus():", sortUserByStatus());
