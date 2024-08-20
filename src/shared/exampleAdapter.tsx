class ProductAdapter {
  constructor(backendData) {
    this.product = {
      id: backendData._id,
      title: backendData.name,
      description: backendData.description || "Данное описание скоро будет",
      price: backendData.price * 80,
    };
  }

  get title() {
    return this.product.title;
  }

  get description() {
    return this.product.description;
  }

  get price() {
    return `${this.product.price} ₽`;
  }
}

// Пример React компонента
const ProductCard = ({ backendData }) => {
  const product = new ProductAdapter(backendData);

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

// Пример использования компонента
const App = () => {
  const backendData = {
    _id: "1",
    name: "Dress 1",
    description: "",
    price: 100,
  };

  return (
    <div>
      <ProductCard backendData={backendData} />
    </div>
  );
};

export default App;
