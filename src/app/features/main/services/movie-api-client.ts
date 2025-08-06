import { ApiResponse } from 'apisauce'
import { createApiClient } from '../../../../services/api-client'
import { Configs } from '../../../../utils/configs'

export const movieAPIClient = createApiClient(Configs.API_BASE_URL ?? '')

movieAPIClient.api.addRequestTransform(request => {
  request.headers = {
    ...request.headers,
    Authorization: `Bearer ${Configs.API_ACCESS_TOKEN_UATH}`,
  }
})

const Monitor = (response: ApiResponse<any>) => {
  if (!response.ok) {
    console.error('API Error:', response.problem, response.originalError)
  } else {
    console.log('API Response:', response.data)
  }
}

movieAPIClient.api.addMonitor(Monitor)
