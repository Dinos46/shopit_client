export const GET_ALL_ITEMS = `
    query($ctg:String){
        items(filter:{ctg:$ctg}){
            title
            category
            price
            id
            image
            description
          }
    }
`
