class Exception {
    constructor(errorCode, message, errorStackTrace) {
      this.code = errorCode;
      this.message = message;
      if (errorStackTrace) {
        this.errs = errorStackTrace;
      }
    }
  }
module.exports = Exception
