export type ReviewResponse = {
    review: string;
    rating: number;
};

export interface Review {
    _id: string;
    review: string;
    rating: number;
    product: string;   
    user: string;      
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface CreateReviewResponse {
    data: Review;
}