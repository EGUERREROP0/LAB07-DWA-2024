const Proveedor = require("../model/proveedor");

module.exports.mostrar = (req, res) => {
  Proveedor.find({}, (error, proveedores) => {
    if (error) {
      return res
        .status(500)
        .json({ message: "Error al mostrar los proveedores" });
    }

    return res.render("index", { proveedores: proveedores });
  });
};

//Crear cproveedor
module.exports.crear = (req, res) => {
  const proveedor = new Proveedor({
    idproveedor: req.body.idproveedor,
    nombrecia: req.body.nombrecia,
  });

  proveedor.save(function (error, proveedor) {
    if (error) {
      return res.status(500).json({
        message: "Error al crear cliente",
      });
    }
    res.redirect("/list");
  });
};

//Editar registro
module.exports.editar = (req, res) => {
  const id = req.body.id_editar.trim();
  const idproveedor = req.body.idproveedor_editar.trim();
  const nombrecia = req.body.nombrecia_editar;
  console.log(idproveedor);
  Proveedor.findByIdAndUpdate(
    id,
    {
      idproveedor,
      nombrecia,
    },
    (error, proveedor) => {
      if (error) {
        return res.status(500).json({
          message: "Error al actualizar",
          error: error.message,
        });
      }
      res.redirect("/list");
    }
  );
};

//Eliminar registro
module.exports.borrar = (req, res) => {
  const id = req.params.id;
  Proveedor.findByIdAndRemove(id, (error, proveedor) => {
    if (error) {
      return res.status(500).json({
        message: "Error al elimiar el proveedor",
      });
    }
    res.redirect("/list");
  });
};
