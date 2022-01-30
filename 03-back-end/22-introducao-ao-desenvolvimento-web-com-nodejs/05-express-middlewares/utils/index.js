// HTTP response status codes
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_UNAUTHORIZED = 401;

// HTTP response messages
const MESSAGE_INVALID_DATA = { message: 'Invalid data' };
const MESSAGE_MISSING_FIELDS = { message: 'Missing fields' };
const MESSAGE_UNAUTHORIZED = { message: 'Unauthorized' };
const MESSAGE_USER_CREATED = { message: 'User created' };

module.exports = {
  HTTP_STATUS_CREATED,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  MESSAGE_INVALID_DATA,
  MESSAGE_MISSING_FIELDS,
  MESSAGE_UNAUTHORIZED,
  MESSAGE_USER_CREATED,
};