const modalInsumo = new bootstrap.Modal(document.getElementById("modalInsumo"));

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, "click", ".btnEditar", (e) => {
  const fila = e.target.parentNode.parentNode;
  id_editar.value = fila.children[0].innerHTML.trim();
  idinsumo_editar.value = fila.children[1].innerHTML.trim();
  nominsumo_editar.value = fila.children[2].innerHTML.trim();
  idproveedor_editar.value = fila.children[3].innerHTML.trim();
  preUni_editar.value = fila.children[4].innerHTML.trim();
  stock_editar.value = fila.children[5].innerHTML.trim();
  modalInsumo.show();
});
