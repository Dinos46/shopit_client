export const ADD_User = `
  mutation($email:String!,$username:String!,$image:String!){
    addUser(userInput:{email:$email,username:$username,image:$image}){
      id
      email
      username
      image
    }
  }
  `

export const GET_USER = `
  query($email:String!){
    getUser(email:$email){
      id
      email
      username
      image
    }
  }`
