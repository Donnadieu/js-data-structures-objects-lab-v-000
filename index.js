// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]:value})
}

function deleteFromDriverByKey(diver, key) {
  return Object.assign({}, delete driver.key)
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    return delete driver[key];
}
