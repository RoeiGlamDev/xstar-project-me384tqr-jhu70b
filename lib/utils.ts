import { formatCurrency } from './formatters';

/
 * Utility functions for luxury LRP cosmetics application
 * This file contains various utility functions tailored for the luxury LRP cosmetics brand.
 * 
 * @module utils
 */

/
 * Interface representing a product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Function to generate a class name based on the provided base name and modifiers.
 * This function is designed to help create elegant and luxurious class names for styling.
 * 
 * @param base - The base class name.
 * @param modifiers - An array of modifiers to append to the base class name.
 * @returns A string representing the complete class name.
 */
export function cn(base: string, ...modifiers: string[]): string {
    return [base, ...modifiers.filter(Boolean)].join(' ').trim();
}

/
 * Function to format product price for display.
 * This function formats the price to include the currency symbol and ensures it matches the luxury branding.
 * 
 * @param price - The price of the product to format.
 * @returns A string representing the formatted price.
 */
export function formatProductPrice(price: number): string {
    return formatCurrency(price, 'USD'); // Assuming USD for luxury LRP cosmetics
}

/
 * Function to create a luxurious product card.
 * This function generates the HTML structure for a product card, emphasizing the luxury aspect of the brand.
 * 
 * @param product - The product object containing details for the card.
 * @returns A string representing the HTML structure of the product card.
 */
export function createProductCard(product: Product): string {
    return 
        <div class="${cn('product-card', 'luxury')}">
            <img src="${product.imageUrl}" alt="${product.name}" class="${cn('product-image', 'elegant')}" />
            <h2 class="${cn('product-name', 'luxury')}">${product.name}</h2>
            <p class="${cn('product-description', 'luxury')}">${product.description}</p>
            <span class="${cn('product-price', 'luxury')}">${formatProductPrice(product.price)}</span>
            <button class="${cn('add-to-cart', 'luxury')}">Add to Cart</button>
        </div>
    ;
}

/
 * Function to generate a luxurious header for the website.
 * This function creates the header section, including the brand name and navigation links.
 * 
 * @returns A string representing the HTML structure of the header.
 */
export function createHeader(): string {
    return 
        <header class="${cn('header', 'luxury')}">
            <h1 class="${cn('brand-name', 'orange')}">luxury LRP cosmetics</h1>
            <nav class="${cn('nav', 'luxury')}">
                <ul>
                    <li><a href="#home" class="${cn('nav-link', 'orange')}">Home</a></li>
                    <li><a href="#products" class="${cn('nav-link', 'orange')}">Products</a></li>
                    <li><a href="#about" class="${cn('nav-link', 'orange')}">About Us</a></li>
                    <li><a href="#contact" class="${cn('nav-link', 'orange')}">Contact</a></li>
                </ul>
            </nav>
        </header>
    ;
}