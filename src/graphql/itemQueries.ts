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
