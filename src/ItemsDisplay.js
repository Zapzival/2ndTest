function ItemsDisplay(props) {
  const showItem = (item) => {
    return (
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
      </tr>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="colo">Id</th>
              <th scope="colo">Name</th>
              <th scope="colo">Price</th>
              <th scope="colo">Type</th>
              <th scope="colo">Brand</th>
            </tr>
          </thead>
          <tbody>{props.items.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsDisplay;
