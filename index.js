var CryptoJS = require('ts.cryptojs256');

function base64url(source) {
  // Encode in classical base64
  encodedSource = CryptoJS.enc.Base64.stringify(source)

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '')

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-')
  encodedSource = encodedSource.replace(/\//g, '_')

  return encodedSource
}

function sign(data, secret, options) {
  if(!options) {
    options = {}
  }

  let defaultOptions = {
    alg: 'HS256',
    typ: 'JWT',
  }
  let header = Object.assign(defaultOptions, options)

  let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header))
  let encodedHeader = base64url(stringifiedHeader)

  let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data))
  let encodedData = base64url(stringifiedData)

  let signature = `${encodedHeader}.${encodedData}`
  signature = CryptoJS.HmacSHA256(signature, secret)
  signature = base64url(signature)
  return `${encodedHeader}.${encodedData}.${signature}`
}

module.exports = {
  sign: sign
}