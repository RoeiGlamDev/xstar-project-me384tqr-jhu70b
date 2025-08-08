import { Product, Category, User } from './models';

/
 * Represents the luxury LRP cosmetics brand.
 * This interface defines the structure of the brand's information.
 */
export interface Brand {
    name: string; // The name of the brand
    colors: string[]; // The primary colors associated with the brand
    industry: string; // The industry in which the brand operates
}

/
 * Represents a product in the luxury LRP cosmetics line.
 * This interface defines the structure of a cosmetic product.
 */
export interface CosmeticProduct {
    id: string; // Unique identifier for the product
    name: string; // Name of the cosmetic product
    description: string; // Detailed description of the product
    price: number; // Price of the product
    category: Category; // Category to which the product belongs
    images: string[]; // Array of image URLs for the product
    isFeatured: boolean; // Indicates if the product is featured
}

/
 * Represents a category of products in the luxury LRP cosmetics line.
 * This interface defines the structure of a product category.
 */
export interface Category {
    id: string; // Unique identifier for the category
    name: string; // Name of the category
    description: string; // Description of the category
}

/
 * Represents a user of the luxury LRP cosmetics website.
 * This interface defines the structure of a user profile.
 */
export interface User {
    id: string; // Unique identifier for the user
    username: string; // Username of the user
    email: string; // Email address of the user
    password: string; // Encrypted password of the user
    favorites: CosmeticProduct[]; // Array of favorite products
}

/
 * Represents the luxury LRP cosmetics brand information.
 */
export const luxuryLRPBrand: Brand = {
    name: "luxury LRP cosmetics",
    colors: ["orange", "white"],
    industry: "cosmetics",
};

/
 * Represents the logic for managing cosmetic products.
 */
export class ProductManager {
    private products: CosmeticProduct[] = [];

    /
     * Adds a new product to the luxury LRP cosmetics collection.
     * @param product - The product to be added.
     */
    addProduct(product: CosmeticProduct): void {
        this.products.push(product);
    }

    /
     * Retrieves all products in the luxury LRP cosmetics collection.
     * @returns An array of cosmetic products.
     */
    getAllProducts(): CosmeticProduct[] {
        return this.products;
    }

    /
     * Retrieves featured products from the luxury LRP cosmetics collection.
     * @returns An array of featured cosmetic products.
     */
    getFeaturedProducts(): CosmeticProduct[] {
        return this.products.filter(product => product.isFeatured);
    }
}