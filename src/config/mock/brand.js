import Mock from 'mockjs'
import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.jpg'
import img3 from '@/assets/images/img3.jpg'
import img4 from '@/assets/images/img4.jpg'
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
