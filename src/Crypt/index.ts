/** */
export default class Crypt{
    constructor(){
        this._init();
    }

    /**初始化插件 */
    private _init():void{
        var eDiv = document.createElement("div");
        if (navigator.appName.indexOf("Internet") >= 0 || navigator.appVersion.indexOf("Trident") >= 0) {
            if (window.navigator['cpuClass'] == "x86") {
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
}