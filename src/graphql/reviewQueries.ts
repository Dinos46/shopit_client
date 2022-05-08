export const CREATE_REVIEW = `
mutation addReview($title:String!,$body:String!,$rating:Int!,$itemId:String!,$userId:String!){
    addReview(reviewInput:{
        title:$title,
        body:$body,
        rating:$rating,
        itemId:$itemId,
        userId:$userId
    })
  }
`

export const DELETE_REVIEW = ``

export const UPDATE_REVIEW = ``
