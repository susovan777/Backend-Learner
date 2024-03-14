// adding Joi validator
const joi = require("joi");

// creating joi schema
const schema = joi
  .object()
  .keys({
    // gender should be atring and could be from ['male', 'female']
    gender: joi.string().valid("male", "female"),
    // age should be a number and integer
    age: joi.number().integer().min(0).max(100),
  }) // specifying atleast one of the key shoud be present
  .or("gender", "age");

const getQueryErrors = (data) => {
  const result = schema.validate(data);

  return result.error;
};

module.exports = getQueryErrors;
