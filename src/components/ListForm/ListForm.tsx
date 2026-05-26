import "./ListForm.css"

export function ListForm({
  useStateName,
  onChangeName,
  useStateQnt,
  onChangeQnt,
  onAddItem,
}) {
  return (
        <form className="product-list-form">
          <label>Nome</label>
          <input className={"product-list-form-input"}
            name="product-name"
            id="product-name"
            value={useStateName}
            type="text"
            onChange={onChangeName}
          />
          <label>Quantidade</label>
          <input className={"product-list-form-input"}
            name="product-qnt"
            id="product-qnt"
            value={useStateQnt}
            type="number"
            onChange={onChangeQnt}
          />
          <button type="submit" className={"product-list-form-submit"} onClick={onAddItem}>
            +
          </button>
        </form>
  );
}
