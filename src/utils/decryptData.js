import CryptoJS, { AES } from 'crypto-js';

function decryptData(encryptedData, secretKey){
    try {
        const decryptedData = AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData);
    }
    catch(err){
        return null
    }
};

export default decryptData