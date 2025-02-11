const removeEmpty = obj => {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};

const path2CamelCase = name =>
  name.replace(/\/(\w)/g, (all, letter) => letter.toUpperCase());

module.exports = {
  removeEmpty,
  path2CamelCase,
};
