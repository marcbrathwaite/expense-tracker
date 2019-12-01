export function applyMiddleware(middlewareWrapper, router) {
  for (const wrapper of middlewareWrapper) {
    wrapper(router)
  }
}

export function filterObj(obj, ...allowedFields) {
  return allowedFields.reduce((newObj, field) => {
    if (obj[field] !== undefined) {
      return { ...newObj, [field]: obj[field] }
    }
    return newObj
  }, {})
}
