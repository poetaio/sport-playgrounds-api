const {bodyUUID} = require("../../utils/validation");


// checks whether user id provided and matches UUID format
const userId = [
    bodyUUID('id'),
];

module.exports = {
    userId
};
