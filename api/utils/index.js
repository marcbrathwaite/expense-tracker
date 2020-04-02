exports.filterObj  = (obj, ...allowedFields) => {
  return allowedFields.reduce((newObj, field) => {
    if (obj[field] !== undefined) {
      return { ...newObj, [field]: obj[field] }
    }
    return newObj
  }, {})
}

exports.isUndefined =  (input) => {
  return input === undefined || input === null || input === ''
}
