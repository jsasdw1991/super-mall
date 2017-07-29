import Mock from 'mockjs'

// const Random = Mock.Random

const brandTemplete = {
  'id': '@integer(1, 100)',
  'name': '@cname()',
  'logo': "@image('200x200', '#51DB89', '#ffffff', '☺')",
  'introduction': '@cparagraph(2)'
}

const brandSettingTemplete = {
  'id': '@integer(1, 100)',
  'mainColor': '@color()'
}

const brand = Object.assign(Mock.mock(brandTemplete), {setting: Mock.mock(brandSettingTemplete)})

function getBrand (config) {
  return { code: 200, brand: brand }
}

export default { getBrand }
