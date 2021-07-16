joi.object().keys({
  result: joi.object().keys({
    code: joi.number(),
    info: joi.string(),
    message: joi.string()
  }),
  data: joi.object().keys({
    recursos: joi.array().items(
      joi.object().keys({
        idRecurso: joi.string(),
        nome: joi.string(),
        descricao: joi.string(),
        data: joi.string(),
        itens: joi.array().items(
          joi.object().keys({
            numero: joi.number(),
            valor: joi.number()
          })
        )
      }),
      joi.object().keys({
        idRecurso: joi.string(),
        nome: joi.string(),
        descricao: joi.string(),
        data: joi.string(),
        itens: joi.array().items(
          joi.object().keys({
            numero: joi.number(),
            valor: joi.number()
          })
        )
      })
    )
  })
})