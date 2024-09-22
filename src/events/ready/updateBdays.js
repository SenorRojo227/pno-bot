const Birthday = require('../../models/birthday');
const scheduleBday = require('../../utils/birthday/scheduleBday');

module.exports = async (client) => {
    try {
        const users = await Birthday.find();
        for (const u of users) {
            const thisUser = await client.users.fetch(u.userId);
            scheduleBday(client, thisUser.toString(), u);
        }
    } catch (error) {
        console.log("Error updating birthday: " + error);
    }
};