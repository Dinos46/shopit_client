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

export const GET_CURRENT_USER = `
  query($email:String!){
    user(email:$email){
      id
      email
      username
      image
    }
  }`
