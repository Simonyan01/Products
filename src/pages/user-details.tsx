import { getUserById } from "@helpers/api"
import { IUser } from "@helpers/types"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const UserDetails = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getUserById(Number(id))
      .then((data) => setUser(data))
  }, [id])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">User Details</h2>
        <div className="space-y-4">
          <div>
            <span className="text-gray-500 font-medium">Name:</span>
            <span className="ml-2 text-gray-800">{user?.name}</span>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Surname:</span>
            <span className="ml-2 text-gray-800">{user?.surname}</span>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Age:</span>
            <span className="ml-2 text-gray-800">{user?.age}</span>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Salary:</span>
            <span className="ml-2 text-gray-800">${user?.salary.toLocaleString()}</span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Posts</h3>
          <ul className="space-y-3">
            {user?.posts.map((post) => (
              <li
                key={post.id}
                className="p-4 bg-gray-100 border rounded-lg shadow-sm text-gray-700"
              >
                {post.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
