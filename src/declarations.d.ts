declare module 'pinia-plugin-persist'

import 'pinia'
declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: {
      enabled: boolean
      strategies?: Array<{
        key: string
        storage: Storage
      }>
    }
  }
}
