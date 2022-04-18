const pizzas = require('../database/pizzas.json')

module.exports = {
    listar: (req, res) => {
        res.render('pizzas.ejs', {pizzas, busca:''});
    },

    mostrar: (req, res) => {
        const id = req.params.id;
        
        let idProxima;

        let idAnterior;

        let posicao = pizzas.findIndex(p => p.id == id);

        let pizza = pizzas[posicao];

        if (posicao == pizzas.length - 1){
            idProxima = pizzas[0].id
        } else {
            idProxima = pizzas[posicao + 1].id
        }

        if (posicao == 0) {
            idAnterior = pizzas[pizzas.length -1].id
        } else {
            idAnterior = pizzas[posicao -1].id
        }

        res.render('pizza.ejs', {pizza, idAnterior, idProxima})

    },

    buscar: (req,res) => {

        let trechoBuscado = req.query.q;

        if (trechoBuscado === ''){
            res.redirect('/')
        } else {
            let resultado = pizzas.filter(p=>p.nome.toLowerCase().includes(trechoBuscado.toLowerCase()))

            res.render('pizzas.ejs', {pizzas:resultado, busca:trechoBuscado})
        }
        
    }
}