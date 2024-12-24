import { InputUser, IUser } from "./types"
import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8080",
})

export const getAllUsers = async (): Promise<IUser[]> => {
  const response = await API.get("/users")
  return response.data
}

export const getUserById = async (id: number): Promise<IUser> => {
  const response = await API.get(`/users/${id}`)
  return response.data
}

export const addUser = async (data: InputUser): Promise<IUser> => {
  const response = await API.post("/users", data)
  return response.data
}

export const deleteUser = async (id: number): Promise<IUser> => {
  const response = await API.delete(`/users/${id}`)
  return response.data
}

export const updateUser = async (data: IUser): Promise<IUser> => {
  const response = await API.put(`/users/${data.id}`, data)
  return response.data
}
