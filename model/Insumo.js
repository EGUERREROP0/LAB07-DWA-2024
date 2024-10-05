const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const insumoSchema = new Schema(
  {
    idinsumo: Number,
    nominsumo: String,
    idproveedor: Number,
    preUni: Number,
    stock: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("insumos", insumoSchema);
