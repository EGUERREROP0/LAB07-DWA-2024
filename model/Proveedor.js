const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proveedorSchema = new Schema(
  {
    idproveedor: String,
    nombrecia: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("proveedores", proveedorSchema);
