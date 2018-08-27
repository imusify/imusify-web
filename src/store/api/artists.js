import api from './create-api'
import mocks from './mocks/artists'
import _ from 'lodash'

let mockApi = {}

if (process.env.NODE_ENV === 'development') {
  mockApi = _.extend({}, mocks)
}

export default _.extend({
  post(opts) {
    return api.post('/artists', opts)
  },

  put(opts) {
    return api.put(`/artists/${opts._id}`, opts)
  },

  delete(id) {
    return api.delete(`/artists/${id}`)
  },

  get(id) {
    return api.get(`/artists/${id}`)
  },

  getAll() {
    return api.get('/artists')
  }
}, mockApi)
