import ProductCard from "../components/ProductCard";

// Sample dummy products
const products = [
  {
    id: "1",
    title: "Smartphone XYZ",
    priceCents: 1599900,
    images: ["https://via.placeholder.com/300x300.png?text=Smartphone"],
  },
  {
    id: "2",
    title: "Running Shoes",
    priceCents: 499900,
    images: ["https://via.placeholder.com/300x300.png?text=Shoes"],
  },
  {
    id: "3",
    title: "Wireless Headphones",
    priceCents: 299900,
    images: ["https://via.placeholder.com/300x300.png?text=Headphones"],
  },
];

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
