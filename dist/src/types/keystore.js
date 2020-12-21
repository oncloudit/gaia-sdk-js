"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreType = void 0;
// Generated by https://quicktype.io

/** 
 * Keystore struct
 * @hidden
 */

/** 
 * Keys struct
 * @hidden
 */

/** 
 * Crypto struct
 * @hidden
 */

/** 
 * Cipherparams struct
 * @hidden
 */

/** 
 * Kdfparams struct
 * @hidden
 */

/** 
 * StoreType of a key
 * - Keystore: save the key as an encrypted keystore
 * - Key: save the key as a plaintext private key
 */
var StoreType;
exports.StoreType = StoreType;

(function (StoreType) {
  StoreType[StoreType["Keystore"] = 0] = "Keystore";
  StoreType[StoreType["Key"] = 1] = "Key";
})(StoreType || (exports.StoreType = StoreType = {}));