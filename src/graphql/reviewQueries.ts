export const CREATE_REVIEW = `
mutation addReview($title:String!,$body:String!,$rating:Int!,$itemId:String!,$userId:String!){
    addReview(reviewInput:{
        title:$title,
        body:$body,
        rating:$rating,
        itemId:$itemId,
        userId:$userId
    })
    {
      error{
        message
      }
      status
      data{

        id
        title
        body
        createdAt
        updatedAt
        rating
        user{
          id
          email
          username
          image
        }
      }
    }
  }
`

export const DELETE_REVIEW = `
mutation deleteReview($reviewId:String!){
  deleteReview(reviewId:$reviewId){
    error{
      message
    }
    status
  }
  
}
`

export const UPDATE_REVIEW = `
mutation editReview($title:String!,$body:String!,$rating:Int!,$id:ID!){
  editReview(reviewInput:{
      title:$title,
      body:$body,
      rating:$rating,
      id:$id
  })
  {
    error{
      message
    }
    status
    data{
      id
      title
      body
      createdAt
      updatedAt
      rating
      user{
        id
        email
        username
        image
      }
    }
  }
}
`
