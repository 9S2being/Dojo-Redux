export interface UserDTO {
    email: string
    password: string
    token?: number | undefined
  }
  
  export interface UsersDB {
    users: UserDTO[]
  }
