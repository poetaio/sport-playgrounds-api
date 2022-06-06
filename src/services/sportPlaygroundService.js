const {Op} = require('sequelize');
const {SportPlayground} = require("../models");

class SportPlaygroundService {
    async create({ name, location: { lat, lng } }) {
        return await SportPlayground.create({
            name, lat, lng,
        }).then(({ id }) => id);
    }

    async getAll(tlLat, tlLng, brLat, brLng) {
        return await SportPlayground.findAll({
            where: {
                lat: {
                    [Op.and]: {
                        [Op.gte]: brLat,
                        [Op.lte]: tlLat,
                    },
                },
                lng: {
                    [Op.and]: {
                        [Op.gte]: tlLng,
                        [Op.lte]: brLng,
                    },
                },
            },
        });
    }

    async getOne(id) {
        return await SportPlayground.findOne({
            where: { id },
        });
    }

    async update(id, { name, location: { lat, lng } }) {
        return await SportPlayground.update({
            name, location: { lat, lng },
        },{
            where: { id },
        });
    }

    async deleteOne(id) {
        return await SportPlayground.destroy({
            where: { id },
        });
    }
}

module.exports = new SportPlaygroundService();
