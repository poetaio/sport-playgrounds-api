const {User} = require("../models");

class UserService {
    /**
     * Creates new user and returns id
     * @return {Promise<string>} id of new user
     */
    async create() {
        return await User.create({
            attributes: ['id'],
        }).then(({ id }) => id);
    }

    /**
     * Checks if user with id exists
     * @param id
     * @return {Promise<boolean>} true if exists
     */
    async existsById(id) {
        return !!await User.count({
            where: { id }
        });
    }
}

module.exports = new UserService();
