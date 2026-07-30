const { soma } = require('../src/app');

module.exports = (req, res) => {
    const resultado = soma(5, 15);
    res.status(200).json({
        mensagem: "Deploy automatizado e executado com sucesso!",
        teste_de_calculo: resultado
    });
};