import { useNavigate, useParams } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { getUserById, updateUser } from "@helpers/api"
import { IUser } from "@helpers/types"
import { useEffect } from "react"

export const EditUser = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IUser>()
  const { key } = useParams<{ key: string }>()
  const navigate = useNavigate()

  const handleUpdate: SubmitHandler<IUser> = async (data: IUser) => {
    data.id = Number(key)
    await updateUser(data)
    navigate("/")
  }

  useEffect(() => {
    getUserById(Number(key))
      .then(response => {
        reset(response)
      })
  }, [key, reset])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit User</h2>
        <form onSubmit={handleSubmit(handleUpdate)}>
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}
          {errors.surname && <p className="text-red-400">{errors.surname.message}</p>}
          {errors.age && <p className="text-red-400">{errors.age.message}</p>}
          {errors.salary && <p className="text-red-400">{errors.salary.message}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter user's name"
              {...register("name", { required: "Please fill name" })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="surname">
              Surname
            </label>
            <input
              id="surname"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter user's surname"
              {...register("surname", { required: "Please fill surname" })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter user's age"
              {...register("age", { pattern: { value: /\d+$/, message: "Please use numbers" } })}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="salary">
              Salary
            </label>
            <input
              id="salary"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter user's salary"
              {...register("salary", { pattern: { value: /\d+$/, message: "Please use numbers" } })}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
