export const GET_ALL_ITEMS = `

query {
    items{
      error{
        message
      }
      status
      data{
        id
        image
        price
        title
        category
        description
        reviews{
          id
          title
          body
          createdAt
          updatedAt
          rating
          user{
            id
            username
            image
          }
        }
      }
    }
  }
`

export const GET_ITEM_BY_ID = `
query getItemsById($id:ID!){
    item(id:$id){
      error{
        message
      }
      status
      data{
        id
        image
        price
        title
        category
        description
        reviews{
          id
          title
          body
          rating
          createdAt
          user{
            id
            username
            image
          }
        }
      }
    }
  }
`

export const GET_FILTERD_ITEMS = `
query($ctg:String,$name:String,$maxPrice:Int,$minPrice:Int) {
  items( filter:{ctg:$ctg,minPrice:$minPrice,maxPrice:$maxPrice,name:$name} ){
    error{
      message
    }
    status
    data{
      id
      image
      price
      title
      category
      description
      reviews{
        id
        title
        body
        createdAt
        updatedAt
        rating
        user{
          id
          username
          image
        }
      }
    }
  }
}

`
