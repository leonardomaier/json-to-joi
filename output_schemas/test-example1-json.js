joi.object().keys({
  dataNascimento: joi.string(),
  codigoOcupacao: joi.string(),
  descricaoOcupacao: joi.string(),
  valorRendaDeclarada: joi.number(),
  cpfProponente: joi.string(),
  cpfRepresentanteLegal: joi.string()
})