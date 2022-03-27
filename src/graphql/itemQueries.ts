export const GET_ALL_ITEMS = `
    query getAllItems($ctg:String,$name:String){
        items(filter:{ctg:$ctg,name:$name}){
            title
            category
            price
            id
            image
            description
          }
    }
`

export const GET_ITEM_BY_ID = `
    query getItemsById($id:ID!){
        item(id:$id){
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
