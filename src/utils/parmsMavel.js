const md5 = require('md5');

const {MARVEL} = require('../config/vars');

module.exports = () => {
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${MARVEL.privateKey}${MARVEL.publicKey}`);

  return `ts=${timestamp}&apikey=${MARVEL.publicKey}&hash=${hash}`;
};
