const jwt = require('jsonwebtoken');

class AuthService {
    async createToken(id) {
        return jwt.sign(
            { id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
    }

    async updateToken(token) {

    }
}

module.exports = new AuthService();
