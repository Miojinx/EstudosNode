import SelecaoRepository from '../repositories/SelecaoRepository'

class SelecaoController {

    async index(req, res) { //devolve todas as seleções
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }
    async show(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }
    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.store(selecao)
        res.json(row)
    }
    async update(req, res) {
        const selecao = req.body
        const id = req.params.id
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
    }
    async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }

}
export default new SelecaoController //para exportar a classe é preciso criar a instância. Singleton(única)