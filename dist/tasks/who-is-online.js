"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS = void 0;
exports.sortUserByStatus = sortUserByStatus;
exports.USERS = [
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
function sortUserByStatus(users) {
    return users.reduce((acc, user) => {
        const { status, lastActivity } = user;
        if (status === "online") {
            if (lastActivity <= 10) {
                acc.online = [...(acc.online || []), user.username];
            }
            else {
                acc.away = [...(acc.away || []), user.username];
            }
        }
        if (status === "offline") {
            acc.offline = [...(acc.offline || []), user.username];
        }
        return acc;
    }, {});
}
