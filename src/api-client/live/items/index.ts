import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '@/models/api-client/items'

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/path/to/an/endpoint/of/real/api'
}

// ItemsApiClient instance pointing to the URL that returns actual data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// export the instance
export default itemsApiClient
