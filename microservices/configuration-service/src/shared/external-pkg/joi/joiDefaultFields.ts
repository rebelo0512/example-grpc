import * as Joi from 'joi';

export const joiDefaultIdField = Joi.object({
  id: Joi.number().required(),
});
