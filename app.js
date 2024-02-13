const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encrypt(text, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encryptedText = cipher.update(text, 'utf-8', 'hex');
  encryptedText += cipher.final('hex');
  return encryptedText;
}

function decrypt(encryptedText, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decryptedText = decipher.update(encryptedText, 'hex', 'utf-8');
  decryptedText += decipher.final('utf-8');
  return decryptedText;
}

rl.question('Enter text to encrypt: ', (text) => {
  rl.question('Enter encryption key: ', (key) => {
    const encryptedText = encrypt(text, key);
    console.log('Encrypted Text:', encryptedText);

    const decryptedText = decrypt(encryptedText, key);
    console.log('Decrypted Text:', decryptedText);

    rl.close();
  });
});
