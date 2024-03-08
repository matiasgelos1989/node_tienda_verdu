const mongoose = require("mongoose");

const PedidoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pedido: {
        type: Array,
        required: true
    },
    precioTotal: {
         type: Number,
         required: true
    },
    complete: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Pedido', PedidoSchema);