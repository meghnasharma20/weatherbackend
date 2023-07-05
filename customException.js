//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

// Load exceptions
var Exception = require("./modal/Exception");
var status_codes = require("./status_code.json");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================

module.exports = {
  intrnlSrvrErr: (err) => {
    console.log(err, "err");
    return new Exception(
      status_codes.intrnlSrvrErr.code,
      status_codes.intrnlSrvrErr.msg
    );
  },
  getErrorException: (errMsg, code) => new Exception(code, errMsg),

  getCustomErrorException: (errMsg, error) => new Exception(5, errMsg, error),

  completeCustomException: (type, language) => {
    if (language == "2") {
      return new Exception(status_codes[type].code, status_codes[type].msgHi);
    } else {
      return new Exception(status_codes[type].code, status_codes[type].msg);
    }
  },
  parameterMissingException: (err) => new Exception(status_codes.parameterMissing.code,err? err.length > 0 ? err[0].message: status_codes.intrnlSrvrErr.msg : status_codes.intrnlSrvrErr.msg,err),
  fieldErrorObject : (fieldname,message) =>{
    return {
      fieldname,
    message
    }
  }
};

//========================== Export Module   End ===========================
