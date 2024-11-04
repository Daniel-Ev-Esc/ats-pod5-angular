export interface Postcard {
    imageUrl:String,
    title:String,
    commenter:String,
    description:String,
    type: Type,
}

export enum Type {
    TRAVEL,
    LIFESTYLE,
    BUSINESS,
    FOOD,
    WORK
}
