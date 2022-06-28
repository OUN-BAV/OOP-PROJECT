export enum DrinkCategory {
    BEER = 'Beer',
    WINE = 'Wine',
    JUICE = 'JuIce',
}
export class Drink{
    protected name: DrinkCategory;
    protected price: number;
}