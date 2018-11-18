// Write your solution in this file!

const driver = { };

function updateDriverWithKeyAndValue(driver, key, value) {
  var new_obj = {};
  for (var keys in driver) {
    var val = driver[keys];
    new_obj[keys] = val;
  }
  new_obj[key] = value;
  return new_obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  var new_obj = {};
  for (var keys in driver) {
    var val = driver[keys];
    if (keys !== key) {
      new_obj[keys] = val;
    }
  }
  return new_obj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
