import Joi from "joi";
const createUserSchema=Joi.object({
    first_name:Joi.string().min(3).max(40).required().messages({
        'string.min':'Foydalanuvchi ismi kamida 3 xarf kiritilsin',
        'string.max':'Foydalanuvchi ismi kopida 40 xarf kiritilsin',
        'string.empty':'Foydalanuvchi ismi bosh bolmasligi shart',
        'any.required':'Foydalanuvchi ism kiritishi shart',
    }),
      last_name:Joi.string().min(3).max(40).required().messages({
        'string.min':'Foydalanuvchi familiasi kamida 3 xarf kiritilsin',
        'string.max':'Foydalanuvchi familiasi kopida 40 xarf kiritilsin',
        'string.empty':'Foydalanuvchi familiasi bosh bolmasligi shart',
        'any.required':'Foydalanuvchi familiya kiritishi shart',
    }),
      email:Joi.string().email().trim().min(3).max(50).required().messages({
        'string.email':'Foydalanuvchi email kiritishi shart',
        'string.min':'Foydalanuvchi email kamida 3 xarf kiritilsin',
        'string.max':'Foydalanuvchi email kopida 50 xarf kiritilsin',
        'string.empty':'Foydalanuvchi email bosh bolmasligi shart',
        'any.required':'Foydalanuvchi email kiritishi shart',
    }),
    //       password:Joi.string().min(3).max(50).required().messages({
    //     'string.min':'Foydalanuvchi password kamida 3 raqam kiritilsin',
    //     'string.max':'Foydalanuvchi password kopida 50 raqam kiritilsin',
    //     'string.empty':'Foydalanuvchi password bosh bolmasligi shart',
    //     'any.required':'Foydalanuvchi password kiritishi shart',
    // }),
    //   adrress:Joi.string().min(3).max(40).required().messages({
    //     'string.min':'Foydalanuvchi adrressi kamida 3 xarf kiritilsin',
    //     'string.max':'Foydalanuvchi adrressi kopida 50 xarf kiritilsin',
    //   'string.empty':'Foydalanuvchi adrressi bosh bolmasligi shart',
    //   'any.required':'Foydalanuvchi adrressi kiritishi shart',
    // })
})

const updateUserSchema=Joi.object({
    first_name:Joi.string().min(3).max(40).required().messages({
        'string.min':'Foydalanuvchi ismi kamida 3 xarf kiritilsin',
        'string.max':'Foydalanuvchi ismi kopida 40 xarf kiritilsin',
        'string.empty':'Foydalanuvchi ismi bosh bolmasligi shart',
        'any.required':'Foydalanuvchi ism kiritishi shart',
    }),
      last_name:Joi.string().min(3).max(40).required().messages({
        'string.min':'Foydalanuvchi ismi kamida 3 xarf kiritilsin',
        'string.max':'Foydalanuvchi ismi kopida 40 xarf kiritilsin',
        'string.empty':'Foydalanuvchi ismi bosh bolmasligi shart',
        'any.required':'Foydalanuvchi ism kiritishi shart',
    }),
      email:Joi.string().email().trim().min(3).max(50).required().messages({
        'string.email':'Foydalanuvchi email kiritishi shart',
        'string.min':'Foydalanuvchi email kamida 3 xarf kiritilsin',
        'string.max':'Foydalanuvchi email kopida 50 xarf kiritilsin',
        'string.empty':'Foydalanuvchi email bosh bolmasligi shart',
        'any.required':'Foydalanuvchi email kiritishi shart',
    }),
    //          password:Joi.string().min(3).max(50).required().messages({
    //     'string.min':'Foydalanuvchi password kamida 3 raqam kiritilsin',
    //     'string.max':'Foydalanuvchi password kopida 50 raqam kiritilsin',
    //     'string.empty':'Foydalanuvchi password bosh bolmasligi shart',
    //     'any.required':'Foydalanuvchi password kiritishi shart',
    // }),
 
    //   adrress:Joi.string().min(3).max(40).required().messages({
    //     'string.min':'Foydalanuvchi adrressi kamida 3 xarf kiritilsin',
    //     'string.max':'Foydalanuvchi adrressi kopida 50 xarf kiritilsin',
    //   'string.empty':'Foydalanuvchi adrressi bosh bolmasligi shart',
    //   'any.required':'Foydalanuvchi adrressi kiritishi shart',
    // })
})
export {
    createUserSchema,
    updateUserSchema
}