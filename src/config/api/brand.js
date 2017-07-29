import Query from '../query'

function getBrand (brandId) {
  return Query.get('/brands', {id: brandId})
}

export default {getBrand}
