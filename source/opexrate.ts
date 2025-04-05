import axios, { AxiosResponse } from 'axios'

export default class OpExRate {
  private base_api_url = 'https://openexchangerates.org/api/'

  constructor(private id: string) {
    this.id = id
  }

  private async request<T>(
    endpoint: string,
    params: Record<string, any> = { }
  ): Promise<T> {
    try {
      params.app_id = this.id
      
      const response: AxiosResponse<T> = await axios.get(
        `${this.base_api_url}${endpoint}`,
        { params }
      )
      
      if ((response.data as any).error === true) {
        const { error, ...details } = response.data as any
        throw details
      } else return response.data
    } catch (error) { throw error }
  }

  latest(params?: Record<string, any>) {
    return this.request('latest.json', params)
  }
  historical(date: string, params?: Record<string, any>) {
    return this.request(`historical/${date}.json`, params)
  }
  currencies(params?: Record<string, any>) {
    return this.request('currencies.json', params)
  }
  timeSeries(params?: Record<string, any>) {
    return this.request('time-series.json', params)
  }
  convert(
    value: number,
    from: string,
    to: string,
    params?: Record<string, any>
  ) {
    return this.request(`convert/${value}/${from}/${to}`, params)
  }
  ohlc(params?: Record<string, any>) {
    return this.request('ohlc.json', params)
  }
  usage(params?: Record<string, any>) {
    return this.request('usage.json', params)
  }
}
