function performEncryption() {
  const text = document.getElementById('text').value;
  const key = document.getElementById('key').value;

  if (!text || !key) {
    alert('Please enter text and key.');
    return;
  }

  const encryptedText = CryptoJS.AES.encrypt(text, key).toString();
  document.getElementById('result').value = encryptedText;
}

function performDecryption() {
  const encryptedText = document.getElementById('text').value;
  const key = document.getElementById('key').value;

  if (!encryptedText || !key) {
    alert('Please enter encrypted text and key.');
    return;
  }

  try {
    const decryptedText = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    document.getElementById('result').value = decryptedText;
  } catch (error) {
    alert('Decryption failed. Check your key.');
  }
}
