const Insumo = require("../model/Insumo");
const Proveedor = require("../model/proveedor");

module.exports.mostrar2 = (req, res) => {
  Insumo.find({}, (error, insumos) => {
    if (error) {
      return res.status(500).json({
        message: "Error al mostrar los Insumos",
      });
    }

    Proveedor.find({}, (error, proveedores) => {
      if (error) {
        return res.status(500).json({
          message: "Error al mostrar los Proveedores",
        });
      }

      const insumosConProveedor = insumos.map((insumo) => {
        const proveedor = proveedores.find(
          (p) => p.idproveedor == insumo.idproveedor
        );
        return {
          ...insumo._doc,
          nombreProveedor: proveedor
            ? proveedor.nombrecia
            : "Proveedor no encontrado",
        };
      });
      return res.render("index2", {
        insumos: insumosConProveedor,
        proveedores: proveedores,
      });
    });
  });
};

module.exports.crear = (req, res) => {
  console.log("crear", req.body);
  const insumo = new Insumo({
    idinsumo: req.body.idinsumo,
    nominsumo: req.body.nominsumo,
    idproveedor: req.body.idproveedor,
    preUni: req.body.preUni,
    stock: req.body.stock,
  });
  insumo.save(function (error, insumo) {
    if (error) {
      return res.status(500).json({
        message: "Error al crear el cliente",
      });
    }
    res.redirect("/listarInsumo");
  });
};

//Editar registro
module.exports.editar = (req, res) => {
  const id = req.body.id_editar.trim();
  const idinsumo = req.body.idinsumo_editar;
  const nominsumo = req.body.nominsumo_editar;
  const idproveedor = req.body.idproveedor_editar;
  const preUni = req.body.preUni_editar;
  const stock = req.body.stock_editar;
  Insumo.findByIdAndUpdate(
    id,
    {
      idinsumo,
      nominsumo,
      idproveedor,
      preUni,
      stock,
    },
    (error, insumo) => {
      if (error) {
        return res.status(500).json({
          message: "Error al actualizar",
          error: error.message,
        });
      }
      res.redirect("/listarInsumo");
    }
  );
};

//Eliminar registro
module.exports.borrar2 = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Insumo.findByIdAndRemove(id, (error, insumo) => {
    console.log(id);
    if (error) {
      return res.status(500).json({
        message: "Error al elimiar el proveedor",
      });
    }
    res.redirect("/listarInsumo");
  });
};
