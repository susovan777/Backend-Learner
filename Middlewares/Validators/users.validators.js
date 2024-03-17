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

const validateSearchQuery = (req, res, next) => {
  const gender = req.query.gender;
  const age = req.query.age;

  const result = schema.validate({
    gender,
    age,
  });

  if (result.error) {
    res.status(422).json(result.error);
  }
  next();
};

module.exports = validateSearchQuery;
