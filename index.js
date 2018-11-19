// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {...driver };
  newObj[key] = value;
  return newObj;
  console.log(newObj);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
 driver[key] = value;
 return driver;
}

function deleteFromDriverByKey(driver, key){
  newObj = Object.assign({},driver) //Remember it merges the second argument into the first object passed in.
  console.log(newObj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  return delete driver[key]
}
