let constant = require("./Constants"),
  customException = require("./customException"),
  APIResponse = require("./modal/ApiResponse");
/**
 *
 * @param {*} response this response object is used to send the result
 * @param {*} result it could be error response or success response
 * @returns
 */
function _sendResult(response, result) {
  // send status code 200
  delete result.code;
  return response.send(result);
}

function sendError(response, error) {
  if (!error.code) {
    error = customException.intrnlSrvrErr(error);
  }
  error.status = constant.STATUS_CODE.ERROR;
//   let message = constant.MESSAGES.SOMETHING_WENT_WRONG;
//   if (error.message) message = error.message;
console.log(error)
response.status(error.code)
  _sendResult(response, error);
}


function sendSuccess(response, result, request, message) {
  let apiResponse = new APIResponse(
    constant.STATUS_CODE.SUCCESS,
    result,
    request,
    message
  );
  _sendResult(response, apiResponse);
}

function sendResponse(result, error, res, req, message) {
  if (result) {
    return sendSuccess(res, result, req, message);
  }
  if (error) {
    return sendError(res, error);
  }
  sendError(
    res,
    customException.intrnlSrvrErr("no response is set to send"),
  );
}
// ========================== Export Module Start ==========================
module.exports = {
    sendError,
  sendResponse,
};
// ========================== Export Module End ============================
