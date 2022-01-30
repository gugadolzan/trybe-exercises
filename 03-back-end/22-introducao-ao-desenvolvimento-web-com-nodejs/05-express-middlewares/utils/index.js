// HTTP response status codes
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_UNAUTHORIZED = 401;
const HTTP_STATUS_NOT_FOUND = 404;

// HTTP response messages
const MESSAGE_INVALID_DATA = { message: 'Invalid data' };
const MESSAGE_INVALID_TOKEN = { message: 'Invalid token' };
const MESSAGE_POST_NOT_FOUND = { message: 'Post not found' };
const MESSAGE_UNAUTHORIZED = { message: 'Unauthorized' };
const MESSAGE_USER_CREATED = { message: 'User created' };

module.exports = {
  HTTP_STATUS_OK,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_NOT_FOUND,
  MESSAGE_INVALID_DATA,
  MESSAGE_INVALID_TOKEN,
  MESSAGE_POST_NOT_FOUND,
  MESSAGE_UNAUTHORIZED,
  MESSAGE_USER_CREATED,
};
