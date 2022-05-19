export const GET_ALL_ITEMS = `
query Items($ctg:String,$minPrice:Int,$maxPrice:Int,$name:String){
    items(filter:{ctg:$ctg,minPrice:$minPrice,maxPrice:$maxPrice,name:$name}){
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
