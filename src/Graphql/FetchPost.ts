import { gql } from '@apollo/client';




export type postsProps = {
    id: string;
    image: string;
    productname: string;
    prices: string;
}

export const FETCH_POST = gql`
{

posts{
    image 
    productname
    prices
    id
}

}



`