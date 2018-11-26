// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const nd = { ...driver }
  nd[key] = value
  return nd
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[`${key}`] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const nd = { ...driver}
  delete nd[key]
  return nd
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
