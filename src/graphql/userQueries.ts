export const ADD_USER = `
mutation($email:String!,$username:String!,$image:String!){
  register(userInput:{email:$email,username:$username,image:$image}){
    error{
      message
    }
    status
    data{
      id
      email
      username
      image
      role
      cart{
        id
        quantity
        item{
          id
          image
          price
          title
        }
      }
    }
  }
}
`

export const GET_USER = `
query($email:String!){
  logIn(email:$email){
    error{
      message
    }
    status
    data{
      id
      email
      username
      image
      role
      cart{
        id
        quantity
        item{
          id
          image
          price
          title
        }
      }
    }
  }
}
`

export const LOGEDIN_USER = `
query($email:String!){
  getLogedInUser(email:$email){
    error{
      message
    }
    status
    data{
      id
      email
      username
      image
      role
      cart{
        id
        quantity
        item{
          id
          image
          price
          title
        }
      }
    }
  }
}
`
