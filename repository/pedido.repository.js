const Pedido = require('../models/pedido.model');

exports.getAllPedidos = async (name) => {
    return await Pedido.find(
        {
            $or: [
                { name: { $regex: '.*' + name + '.*', $options: 'i' } },
                
            ]
        }
    );
}

exports.getPedido = async (id) => {
    return await Pedido.findById(id);
}

exports.createPedido = async (data) => {
    const pedido = new Pedido(data);
    return await pedido.save();
}


exports.updatePedido = async (id, data) => {
    return await Pedido.findByIdAndUpdate(id, data, { new: true });
}

exports.deletePedido = async (id) => {
    return await Pedido.findByIdAndDelete(id);
}