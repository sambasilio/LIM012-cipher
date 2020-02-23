const cipher = {
    encode: (offset, string) => {

        let newString = "";
        if (offset === null || offset === 0) {
            throw new TypeError();
        }
        for (let i = 0; i < string.length; i++) {
            const convertAascii = string[i].charCodeAt();
            if (convertAascii >= 65 && convertAascii <= 90) {
                newString += String.fromCharCode((convertAascii - 65 + (offset)) % 26 + 65);
            } else if (convertAascii >= 97 && convertAascii <= 122) {
                newString += String.fromCharCode((convertAascii - 97 + (offset)) % 26 + 97);
            } else if (convertAascii >= 48 && convertAascii <= 57) {
                newString += String.fromCharCode((convertAascii - 48 + (offset)) % 10 + 48);
            } else {
                newString += string[i];
            }
        }
        return newString;
    },
    decode: (offset, string) => {
        let newString = "";
        for (let i = 0; i < string.length; i++) {
            const convertAascii = string[i].charCodeAt();
            if (convertAascii >= 65 && convertAascii <= 90) {
                newString += String.fromCharCode((convertAascii - 90 - (offset)) % 26 + 90);
            } else if (convertAascii >= 97 && convertAascii <= 122) {
                newString += String.fromCharCode((convertAascii - 122 - (offset)) % 26 + 122);
            } else if (convertAascii >= 48 && convertAascii <= 57) {
                newString += String.fromCharCode((convertAascii - 57 - (offset)) % 10 + 57);
            } else {
                newString += string[i];
            }
        }

        return newString;
    }
};
export default cipher;