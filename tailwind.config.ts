import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // Custom orange color for luxury LRP cosmetics
        },
        white: {
          DEFAULT: '#FFFFFF', // Custom white color for luxury LRP cosmetics
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});

// Types for luxury LRP cosmetics
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

// Business logic for luxury LRP cosmetics
export class CosmeticsBusiness {
  private products: Product[] = [];
  private cart: CartItem[] = [];

  constructor(products: Product[]) {
    this.products = products;
  }

  /
   * Adds a product to the cart.
   * @param productId - The ID of the product to add.
   * @param quantity - The quantity of the product to add.
   */
  addToCart(productId: number, quantity: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      const cartItem = this.cart.find(item => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        this.cart.push({ product, quantity });
      }
    }
  }

  /
   * Retrieves the current cart items.
   * @returns An array of cart items.
   */
  getCartItems(): CartItem[] {
    return this.cart;
  }

  /
   * Calculates the total price of the cart.
   * @returns The total price.
   */
  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}