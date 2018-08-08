import { decrypt, encrypt, ivFromSecret, isSecretValid } from 'crypty'

const secret = '0DJH9WqZEZXynHmH1qjX0PSQ2JxpWxRv'
const validHash = 'ca61b1d4d955fd7a950974205a6db78b'
const invalidHash = 'ca61b1d4d955fd7a950974205a6db78F'

describe('crypty', () => {
  describe('ivFromSecret', () => {
    it('should extract iv from secret', () => {
      expect(ivFromSecret(secret)).toHaveLength(16)
    })
  })

  describe('isSecretValid', () => {
    it('should valid a secret', () => {
      expect(isSecretValid(secret)).toBeTruthy()
      expect(isSecretValid('qweqeqwe')).toBeFalsy()
      expect(isSecretValid()).toBeFalsy()
    })
  })

  describe('decrypt', () => {
    it('should throw in case secret is not valid', () => {
      expect(() => decrypt(invalidHash, 'qweqew')).toThrowError(
        'Secret must have 32 bytes.'
      )
    })

    it('should fail if secret and hash do not match', () => {
      expect(() => decrypt(invalidHash, secret)).toThrow()
    })

    it('should decrypt successfully a text', () => {
      expect(decrypt(validHash, secret)).toEqual('my text')
    })
  })

  describe('encrypt', () => {
    it('should throw in case secret is not valid', () => {
      expect(() => encrypt('my text', 'qweqwe')).toThrowError(
        'Secret must have 32 bytes.'
      )
    })

    it('should fail if secret and hash do not match', () => {
      expect(() => encrypt('my text', 'qwqwee')).toThrow()
    })

    it('should encrypt successfully a text', () => {
      expect(encrypt('my text', secret)).toEqual(validHash)
    })
  })
})
