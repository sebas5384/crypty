import crypto from 'crypto'

const algorithm = 'aes-256-cbc'

export const ivFromSecret = secret => secret.slice(0, 16)
export const isSecretValid = secret => !!secret && secret.length === 32

export function encrypt (text, secret) {
  if (!isSecretValid(secret)) {
    throw new Error('Secret must have 32 bytes.')
  }
  let cipher = crypto.createCipheriv(algorithm, secret, ivFromSecret(secret))
  let crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}

export function decrypt (text, secret) {
  if (!isSecretValid(secret)) {
    throw new Error('Secret must have 32 bytes.')
  }
  let decipher = crypto.createDecipheriv(
    algorithm,
    secret,
    ivFromSecret(secret)
  )
  let dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8')
  return dec
}
