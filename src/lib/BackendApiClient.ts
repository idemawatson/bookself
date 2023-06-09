import BaseApiClient from '@/lib/BaseApiClient'

const baseURL = `${process.env['NEXT_PUBLIC_BASE_URL']}/api`

export default class BackendApiClient extends BaseApiClient {
  constructor() {
    super({
      baseURL,
      headers: {
        'Content-type': 'application/json',
      },
    })
  }
  interceptors() {
    return this._client.interceptors
  }
}
