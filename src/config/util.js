const util = {
  jsonToObject: function (json) {
    return JSON.parse(json)
  },
  objectToJson: function (object) {
    return JSON.stringify(object)
  }
}

export default util
