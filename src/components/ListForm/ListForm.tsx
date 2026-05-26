export function ListForm({
  useStateName,
  onChangeName,
  useStateQnt,
  onChangeQnt,
  onAddItem,
}) {
  return (
    <div>
      <div className="product-list-form">
        <form>
          <input
            name="product-name"
            value={useStateName}
            type="text"
            onChange={onChangeName}
          />
          <input
            name="product-qnt"
            value={useStateQnt}
            type="number"
            onChange={onChangeQnt}
          />
          <button type="submit" onClick={onAddItem}>
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}
