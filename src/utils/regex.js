const UUID_REGEX = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$");
const JWT_TOKEN_REGEX_STRING = '[\\w-]*\\.[\\w-]*\\.[\\w-]*';
const AUTHORIZATION_BEARER_REGEX = new RegExp(`Bearer ${JWT_TOKEN_REGEX_STRING}`);


module.exports = {
    UUID_REGEX,
    AUTHORIZATION_BEARER_REGEX
};
