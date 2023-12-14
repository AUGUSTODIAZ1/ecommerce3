
import 'admin.css'



export const Admin = () => {
  return (
    <>
  <h1>Página de Administración</h1>
  <div className="row d-flex m-0 p-0">
    <div className="col-12 col-md-5 col-xl-3 formContainer p-3 m-0">
      <div id="add-product-form-container" className="">
        <h3 className="">Agregar/ Editar Producto:</h3>
        <form
          id="add-product-form"
          className="row g-3 needs-validation"
          noValidate=""
        >
          <div className="mb-3 p-3">
            <label htmlFor="product-name" className="form-label w-100 fw-bold">
              Nombre del Producto:
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="product-name"
              required=""
            />
            <div className="invalid-feedback">
              Por favor, ingresa el nombre del producto.
            </div>
            <label
              htmlFor="product-price"
              className="form-label w-100 fw-bold mt-2"
            >
              Precio:
            </label>
            <input
              type="number"
              className="form-control w-100"
              id="product-price"
              step="0.01"
              required=""
            />
            <div className="invalid-feedback">
              Por favor, ingresa el precio del producto.
            </div>
            <label
              htmlFor="product-category"
              className="form-label w-100 fw-bold mt-2"
            >
              Categoría:
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="product-category"
              required=""
            />
            <div className="invalid-feedback">
              Por favor, selecciona una categoría.
            </div>
            <label
              htmlFor="product-image"
              className="form-label w-100 fw-bold mt-2"
            >
              Imagen:
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="product-image"
              required=""
            />
            <div className="invalid-feedback">
              Por favor, proporciona una URL válida para la imagen.
            </div>
            <label
              htmlFor="product-description"
              className="form-label w-100 fw-bold mt-2"
            >
              Descripción:
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="product-description"
              required=""
            />
            <div className="invalid-feedback">
              Por favor, proporciona una descripción del producto.
            </div>
            <label
              htmlFor="product-stock"
              className="form-label w-100 fw-bold mt-2"
            >
              Stock:
            </label>
            <input
              type="number"
              className="form-control w-100"
              id="product-stock"
              required=""
            />
            <div className="invalid-feedback">
              Por favor, ingresa la cantidad de stock disponible.
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-dark submit align-center w-100"
              id="submit-button"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="col-12 col-md-7 col-xl-9 tableContainer">
      <div className="table-responsive">
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th className="d-none d-xl-table-cell">Imagen</th>
              <th className="d-none d-xl-table-cell">ID</th>
              <th>Nombre del Producto</th>
              <th className="d-none d-md-table-cell">Descripción</th>
              <th>Precio</th>
              <th className="d-none d-xl-table-cell">Categoría</th>
              <th className="d-none d-xl-table-cell">Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="product-list"></tbody>
        </table>
      </div>
    </div>
  </div>
</>

  )
}
