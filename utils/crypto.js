let CryptoJS = require("crypto-js");
/**
 * 
 * @param {String} data 要加密的json字符串
 * @param {*} key 
 * @param {*} iv 
 */
export function getAesString(data, key, iv) {
    var key = CryptoJS.enc.Utf8.parse(key);
    var iv = CryptoJS.enc.Utf8.parse(iv);
    var encrypted = CryptoJS.AES.encrypt(data, key,
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return encrypted.toString();
}
/**
 * 
 * @param {String} data 要解密的json字符串
 * @param {*} key 
 * @param {*} iv 
 */
export function getDAesString(encrypted, key, iv) {
    var key = CryptoJS.enc.Utf8.parse(key);
    var iv = CryptoJS.enc.Utf8.parse(iv);
    var decrypted = CryptoJS.AES.decrypt(encrypted, key,
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
/**
 * 
 * @param {*} data 要加密的json字符串
 */
export function getAES(data) {
    var key = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    var iv = '1234567812345678';
    var encrypted = getAesString(data, key, iv);
    return encrypted;
}
/**
 * 
 * @param {*} data 要解密的json字符串
 */
export function getDAes(data) {
    var key = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    var iv = '1234567812345678';
    var decryptedStr = getDAesString(data, key, iv);
    return decryptedStr;
}