export interface IStackOverflowItem {
    title: string;
    view_count:number;
    score:number;
    link:string;
}
export interface IStackoverflowResponse {
    items:IStackOverflowItem[];
}