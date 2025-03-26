import React from 'react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          
          <textarea
            placeholder="Delivery Address"
            className="w-full p-3 border rounded-lg"
            rows="4"
            required
          ></textarea>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="space-y-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>Ksh {item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-2 border-t border-gray-200">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>Ksh {total}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Confirm Order with M-Pesa
          </button>
        </form>
      </div>
    </div>
  );
}