export interface IRecipeCard {
    id: number | string;
    image: string;
    title: string;
    aggregateLikes: number | string;
    readyInMinutes: number | string;
    healthScore: number | string;
}