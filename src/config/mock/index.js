import Mock from 'mockjs'
import brand from './brand'

const baseUrl = 'https://test.com'

Mock.mock(baseUrl + '/get_brand', 'get', brand.getBrand)
Mock.mock(baseUrl + '/get_brand_setting', 'get', brand.getBrandSetting)
