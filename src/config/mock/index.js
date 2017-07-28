import Mock from 'mockjs'
import brand from './brand'

Mock.mock(/\/get_brand/, 'get', brand.getBrand)
Mock.mock(/\/get_brand_setting/, 'get', brand.getBrandSetting)
