module.exports = (day, month, year) => {
    const date = new Date();
    let age = date.getFullYear() - year;
    let hasPassed = (date.getMonth() + 1) - month > 0 ? true : ((date.getMonth() + 1) - month == 0 && date.getDate() - day >= 0);
    if (!hasPassed) {
        age--;
    }
    return age;
}