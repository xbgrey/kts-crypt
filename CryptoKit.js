function Cryptokit() {
};


Cryptokit.prototype.init = function () {
    var eDiv = document.createElement("div");
    if (navigator.appName.indexOf("Internet") >= 0 || navigator.appVersion.indexOf("Trident") >= 0) {
        if (window.navigator.cpuClass == "x86") {
            eDiv.innerHTML = "<object id=\"cryptokitCtrl\" codebase=\"CryptoKit.Cedex.x86.cab\" classid=\"clsid:7DC19292-E480-476D-A713-E20B5BEA1BB1\" ></object>";
        }
        else {
            eDiv.innerHTML = "<object id=\"cryptokitCtrl\" codebase=\"CryptoKit.Cedex.x64.cab\" classid=\"clsid:66331DE3-8EC3-498E-952A-F347A588ABC0\" ></object>";
        }
    }
    else {
        eDiv.innerHTML = "<embed id=\"cryptokitCtrl\" type=\"application/npCryptoKit.Cedex.x86\" style=\"height: 0px; width: 0px\">";
    }
    document.body.appendChild(eDiv);
}


Cryptokit.prototype.uninit = function () {
}

Cryptokit.prototype.selectCertificate = function (bstrSubjectDNFilter, bstrIssuerDNFilter, serialNo, bstrCSPFilter, callback) {
    var result = new Object() ;
    try {
        result.error = 0;
        result.value = document.getElementById("cryptokitCtrl").SelectCertificate(bstrSubjectDNFilter, bstrIssuerDNFilter, serialNo, bstrCSPFilter);
    }
    catch (e) {
        result.error = -1;
        result.value = e.message;
    }
    callback(result);
}


Cryptokit.prototype.getSignCertInfo = function (InfoTypeID, callback) {
    var result = new Object(); 
    try {
        result.error = 0;
        result.value = document.getElementById("cryptokitCtrl").GetSignCertInfo(InfoTypeID);
    }
    catch (e) {
        result.error = -1;
        result.value = e.message;
    }
    callback(result);
}


Cryptokit.prototype.signMsgPKCS7Detached = function (source, selectedAlg, callback) {
    var result = new Object();
    try {
        result.error = 0;
        result.value = document.getElementById("cryptokitCtrl").SignMsgPKCS7Detached(source, selectedAlg); 
    }
    catch (e) {
        result.error = -1;
        result.value = e.message;
    }
    callback(result);
}


Cryptokit.prototype.verifyMsgPKCS7Detached = function (signature, signaturetype, source, callback) {
    var result = new Object();
    try {
        result.error = 0;
        result.value = document.getElementById("cryptokitCtrl").VerifyMsgPKCS7Detached(signature, signaturetype, source); 
    }
    catch (e) {
        result.error = -1;
        result.value = e.message;
    }
    callback(result);
}


Cryptokit.prototype.signHashMsgPKCS7Detached = function (sourceHash, selectedAlg, callback) {
    var result = new Object();
    try {
        result.error = 0;
        result.value = document.getElementById("cryptokitCtrl").SignHashMsgPKCS7Detached(sourceHash, selectedAlg);
    }
    catch (e) {
        result.error = -1;
        result.value = e.message;
    }
    callback(result);
}


Cryptokit.prototype.signFilePKCS7Detached = function (sourceFile, selectedAlg, callback) {
    var result = new Object();
    try {
        result.error = 0;
        result.value = document.getElementById("cryptokitCtrl").SignFilePKCS7Detached(sourceFile, selectedAlg);
    }
    catch (e) {
        result.error = -1;
        result.value = e.message;
    }
    callback(result);
}


Cryptokit.prototype.verifyFilePKCS7Detached = function (signature, signaturetype, sourceFile, callback) {
    var result = new Object();
    try {
        result.error = 0;
        result.value = document.getElementById("cryptokitCtrl").VerifyFilePKCS7Detached(signature, signaturetype, sourceFile);
    }
    catch (e) {
        result.error = -1;
        result.value = e.message;
    }
    callback(result);
}


Cryptokit.prototype.GetLastErrorDesc = function (callback) {
    var result = new Object();
    try {
        result.error = 0;
        result.value = document.getElementById("cryptokitCtrl").GetLastErrorDesc();
        callback(result);
    }
    catch (e) {
        result.error = -1;
        result.value = e.message;
    }
}
