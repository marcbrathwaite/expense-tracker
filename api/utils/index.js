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

// This function name might be a bit misleading, its not actually checking for undefined
// Maybe we could rename it to isEmpty? Or something like that?
export function isUndefined(input) {
  return input === undefined || input === null || input === ''
}
