import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    { id: 1, name: "Chocolate Truffle", price: 600, description: "Rich Belgian chocolate", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Red Velvet Cake", price: 550, description: "Classic cream cheese frosting", image: "https://via.placeholder.com/200" }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Our Fresh Bakery Menu</h2>
        <div className="row">
          {products.map(p => (
            <div className="col-md-4 mb-4" key={p.id}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;