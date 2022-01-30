import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from './items'

// we create an instance of the main ApiClient client that wraps all mock clients
const apiMockClient: ApiClientInterface = {
  items: itemsApiClient
}

// we export the instance
export default apiMockClient

