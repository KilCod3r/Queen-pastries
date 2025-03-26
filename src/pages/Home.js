import React from 'react';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

export default function Home() {
  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-3xl font-bold mb-8">Featured Pastries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}