joi.object().keys({
  simulacao: joi.object().keys({
    dataReferenciaSimulacao: joi.string(),
    proponente: joi.object().keys({
      dataNascimento: joi.string(),
      tipoInvestidor: joi.string()
    }),
    beneficio: joi.object().keys({
      idadeAposentadoria: joi.number(),
      previdencia: joi.object().keys({
        codigoPlano: joi.number(),
        valoresProponente: joi.object().keys({
          valorSaldoFuturo: joi.number()
        })
      })
    })
  })
})