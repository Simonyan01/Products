import { deleteUser, getAllUsers } from "@helpers/api"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IUser } from "@helpers/types"

export const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const handleDelete = async (id: number) => {
    await deleteUser(id)
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  useEffect(() => {
    getAllUsers()
      .then(response => setUsers(response))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map(({ id, name, surname, age, salary }) => (
          <div key={id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white font-bold rounded-full text-xl mb-4">
              {name[0].toUpperCase()}
              {surname[0].toUpperCase()}
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-800">{name} {surname}</h2>
              <p className="text-gray-600">Age: {age}</p>
              <p className="text-gray-600">Salary: ${salary.toLocaleString()}</p>
            </div>
            <Link to={`user/details/${id}`}>
              Details
            </Link>
            <Link to={`user/edit/${id}`}>
              Edit
            </Link>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
