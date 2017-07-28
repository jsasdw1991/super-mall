import Query from '../query'

function getBrand (brandId) {
  return Query.get('/get_brand', {id: brandId})
}

function getBrandSetting (brandId) {
  return Query.get('/get_brand_setting', {id: brandId})
}

export default {getBrand, getBrandSetting}
