import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data: products, error } = useSWR("/api/products", fetcher);
  if (error) return <div>Error loading products❌</div>;
  if (!products) return <div>Loading products🔃</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>🦈{product.name}</h3>
            <p>📝{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
