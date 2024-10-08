const members = require("../../data/members");
const items = require("../../data/items");
const stances = require("../../data/stances");

module.exports = () => {
    let memberArr = Object.values(members);
    let itemArr = Object.values(items);
    let stanceArr = Object.values(stances);
    for (const m of memberArr) {
        m.type = "Member";
    }
    for (const i of itemArr) {
        i.type = "Item";
    }
    for (const s of stanceArr) {
        s.type = "Stance";
    }

    let unitArr = memberArr.concat(itemArr);
    unitArr = unitArr.concat(stanceArr);
    return unitArr;
}