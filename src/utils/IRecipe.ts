export interface IRecipe {
    id: number | string;
    image: string;
    title: string;
    aggregateLikes: number | string;
    readyInMinutes: number | string;
    healthScore: number | string;
}