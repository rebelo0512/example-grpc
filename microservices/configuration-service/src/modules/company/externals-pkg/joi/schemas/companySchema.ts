import * as Joi from 'joi';

export const companyCreateSchema = Joi.object({
  name: Joi.string().required(),
  cnpj: Joi.string().required(),
});

export const companyUpdateSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  cnpj: Joi.string().required(),
});
