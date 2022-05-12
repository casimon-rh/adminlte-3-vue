import type { IUser } from '@/interfaces/user'

const getError = (error: any) => {
  const message = error.message || 'Failed'
  return new Error(message)
}

export const loginByAuth = async (email: string, password: string) => {
  try {
    const token = 'await Gatekeeper.loginByAuth(email, password)'
    return token
  } catch (error: any) {
    throw getError(error)
  }
}

export const registerByAuth = async (email: string, password: string) => {
  try {
    const token = 'await Gatekeeper.registerByAuth(email, password)'
    return token
  } catch (error: any) {
    throw getError(error)
  }
}

export const getProfile = async () => {
  try {
    const user: IUser = {
      createdAt: '',
      email: '',
      ID: '',
      isVerified: true,
      metadata: {},
      picture: '',
      provider: '',
      socialID: '',
      updatedAt: '',
      username: 'user'
    }
    return user
  } catch (error: any) {
    throw getError(error)
  }
}
