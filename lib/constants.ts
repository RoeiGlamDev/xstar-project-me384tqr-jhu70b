export const BRAND_NAME = "luxury LRP cosmetics";
export const PRIMARY_COLOR = "#FFA500"; // Orange
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration settings for the luxury LRP cosmetics application.
 * This includes brand-specific constants and styling preferences.
 */
export const CONFIG = {
    brand: BRAND_NAME,
    colors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
    },
    styles: {
        luxury: true,
        3DEffects: true,
    },
};

/
 * Interface representing a cosmetic product in the luxury LRP cosmetics line.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    isLuxury: boolean;
}

/
 * Sample data for luxury LRP cosmetics products.
 */
export const sampleProducts: CosmeticProduct[] = [
    {
        id: "1",
        name: "Radiant Glow Foundation",
        description: "Achieve a flawless complexion with our luxurious Radiant Glow Foundation, designed for all skin types.",
        price: 55.00,
        category: "Foundation",
        imageUrl: "/images/radiant-glow-foundation.jpg",
        isLuxury: true,
    },
    {
        id: "2",
        name: "Silk Touch Lipstick",
        description: "Indulge your lips with our Silk Touch Lipstick, offering rich color and a smooth finish.",
        price: 30.00,
        category: "Lipstick",
        imageUrl: "/images/silk-touch-lipstick.jpg",
        isLuxury: true,
    },
    {
        id: "3",
        name: "Velvet Matte Eyeshadow Palette",
        description: "Explore endless possibilities with our Velvet Matte Eyeshadow Palette, featuring a range of luxurious shades.",
        price: 65.00,
        category: "Eyeshadow",
        imageUrl: "/images/velvet-matte-eyeshadow.jpg",
        isLuxury: true,
    },
];