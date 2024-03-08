const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    modalidadVenta: String,    
    url: String   

});

module.exports = mongoose.model('Product', ProductSchema);