import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://64a75d11f3b0aabd48284f3b.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Our Products</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products.length > 0 ? products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              width: "180px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img src={p.image} alt={p.name} style={{ width: "100%", borderRadius: "6px" }} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
          </div>
        )) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}
