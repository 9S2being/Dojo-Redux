import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserDTO, UsersState } from "../../types/user"

const initialState: UsersState = {
  users: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      signIn: (state, action: PayloadAction<UserDTO>) => {
        const index = state.users.findIndex(
          (user) => user.email === action.payload.email
        )
  
        if (index !== -1) {
          state.users.splice(index, 1, { ...action.payload, token: Date.now() })
  
          alert("Usuário logado")
        } else {
          alert("Credenciais inválidas")
        }
      },
      signUp: (state, action: PayloadAction<UserDTO>) => {
        return { users: [...state.users, { ...action.payload }] }
      }
    }
  })
  
  export const { signUp, signIn } = userSlice.actions
  export default userSlice.reducer