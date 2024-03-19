export const validateUsername = (username: string) => {
  if (username.length < 3) return 'The username must have more than 3 characters.'
  return ''
}

export const validatePassword = (password: string) => {
  if (password.length < 12) return 'The password must have more than 12 characters.'
  else if (!/[A-Z]/.test(password)) return 'Must have at least one uppercase letter'
  else if (!/[a-z]/.test(password)) return 'Must have at least one lowercase letter'
  else if (!/\d/.test(password)) return 'It must contain at least one number.'
  else if (!/[@#$%&]/.test(password))
    return 'Must have at least one special character from the following: @#$%&'
  return ''
}
