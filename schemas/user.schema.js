const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const children = Joi.number().integer().min(1).max(10);
const gender = Joi.string();
const job = Joi.string();
const birthdate = Joi.date();

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  children: children.required(),
  gender: gender.required(),
  job: job.required(),
  birthdate: birthdate.required(),
});

const updateUserSchema = Joi.object({
  name,
  email,
  children,
  gender,
  job,
  birthdate,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
