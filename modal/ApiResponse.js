let constant = require("../Constants");

class APIResponse {
  constructor(statusCode, result, request, message) {
    this.message = message ? message : result ? "success" : "failure";
    this.status = statusCode;
    if (statusCode == constant.STATUS_CODE.SUCCESS) {
      result ? (this.res = result) : constant.EMPTY;
    } else {
      result ? (this.err = result) : constant.EMPTY;
    }
  }
}

// ========================== Export Module Start ==========================
module.exports = APIResponse;
// ========================== Export Module End ============================
