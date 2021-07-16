joi.object().keys({
  result: joi.object().keys({
    code: joi.number(),
    info: joi.string(),
    message: joi.string()
  }),
  data: joi.object().keys({
    tiposAtendimento: joi.array().items(
      joi.object().keys({
        idTipoAtendimento: joi.number(),
        nome: joi.string(),
        descricao: joi.string(),
        justificativaRequerida: joi.number(),
        dataAtualizado: joi.string(),
        ativo: joi.number()
      }),
      joi.object().keys({
        idTipoAtendimento: joi.number(),
        nome: joi.string(),
        descricao: joi.string(),
        justificativaRequerida: joi.number(),
        dataAtualizado: joi.string(),
        ativo: joi.number()
      })
    )
  })
})