import { ItemsApiClientInterface } from './items'

/**
 * @Name ApiClientInterface
 * @description
 * Interface that wraps all API client modules in one place to keep your code organized
 */
export interface ApiClientInterface {
  items: ItemsApiClientInterface
}
