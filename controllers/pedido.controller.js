const pedidoRepository = require('../repository/pedido.repository');

exports.getAllPedidos = async (req, res) => {
    try {
        const name = req.query.name;
        const pedidos = await pedidoRepository.getAllPedidos(name);
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto:' + error })
    }
}

exports.createPedido = async (req, res) => {
    try {
        const pedido = await pedidoRepository.createPedido(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto:' + error })
    }
}


exports.updatePedido = async (req, res) => {
    try {
        const pedidoId = req.params.id;
        const pedido = await pedidoRepository.updatePedido(pedidoId, req.body);
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto:' + error })
    }
}

exports.deletePedido = async (req, res) => {
    try {
        const pedidoId = req.params.id;
        const pedido = await pedidoRepository.deletePedido(pedidoId);
        res.status(204).json({ message: 'Pedido eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto:' + error })
    }
}
