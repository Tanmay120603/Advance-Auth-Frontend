import { AES } from 'crypto-js';

function encryptData(data,secretKey){
    const encryptedData = AES.encrypt(JSON.stringify(data), secretKey).toString();
    return encryptedData;
};

export default encryptData