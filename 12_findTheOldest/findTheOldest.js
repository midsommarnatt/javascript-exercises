const findTheOldest = function (people) {
    const oldest = people.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const lastGuy = (('yearOfDeath' in a ? a.yearOfDeath : currentYear) - a.yearOfBirth);
        const nextGuy = (('yearOfDeath' in b ? b.yearOfDeath : currentYear) - b.yearOfBirth);
        return lastGuy > nextGuy ? -1 : 1;
    })[0];
    return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
