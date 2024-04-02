import axios from 'axios'
import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react'
import { AuthProvider, useAuthContext } from '../../contexts/auth/AuthProvider'
import { LoginCall } from '../../middleware/login/LoginCall'

type UserInput = {
  email: string
  password: string
}

export const Login: FC = () => {
  const [inputValue, setInputValue] = useState<UserInput>({
    email: "",
    password: ""
  });

  const { dispatch } = useAuthContext();

  const inputChangeHandller = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

  const inputFormHandller = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    LoginCall<UserInput>(inputValue, dispatch)

    setInputValue({
      email: "",
      password: ""
    })
  }

  return (
    <>
      <div>
        <form action="" onSubmit={(e) => inputFormHandller(e)}>
          <div>
            <label>email</label>
            <input type='text' name="email" onChange={inputChangeHandller} value={inputValue.email} />
          </div>
          <div>
            <label>password</label>
            <input type='text' name="password" onChange={inputChangeHandller} value={inputValue.password} />
          </div>
          <div>
            <button>ログイン</button>
          </div>
        </form>
      </div>
    </>
  )
}


