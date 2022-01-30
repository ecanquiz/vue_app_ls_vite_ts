import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from './items'

// create an ApiClient instance that wraps the actual clients
const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
}

// export the instance
export default apiLiveClient

