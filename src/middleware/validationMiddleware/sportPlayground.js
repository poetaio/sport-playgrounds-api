const {bodyStringNotNullOrEmpty, pathUUID, bodyFloat, queryFloatNotRequired} = require("../../utils/validation");


const create = [
    bodyStringNotNullOrEmpty('name'),
    bodyFloat('location.lat'),
    bodyFloat('location.lng'),
];

const getAll = [
    queryFloatNotRequired('tlLat'),
    queryFloatNotRequired('tlLng'),
    queryFloatNotRequired('brLat'),
    queryFloatNotRequired('brLng'),
];

const getOne = [
    pathUUID('splId'),
];

const update = [
    pathUUID('splId'),
    bodyStringNotNullOrEmpty('name'),
    bodyFloat('location.lat'),
    bodyFloat('location.lng'),
];

const deleteOne = [
    pathUUID('splId'),
];

module.exports = {
    create,
    getAll,
    getOne,
    update,
    deleteOne,
};
