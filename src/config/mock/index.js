import Mock from 'mockjs'
import brand from './brand'

const baseUrl = 'https://test.com'

Mock.mock(baseUrl + '/brands', 'get', brand.getBrand)
