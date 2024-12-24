import { useNavigate } from "react-router-dom"
import { InputUser } from "@helpers/types"
import { useForm } from "react-hook-form"
import { addUser } from "@helpers/api"

export const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<InputUser>()
    const navigate = useNavigate()

    const onSubmit = async (data: InputUser) => {
        await addUser(data)
        navigate("/")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add User</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-600 mb-2">Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-2">Surname</label>
                            <input
                                {...register("surname", { required: "Surname is required" })}
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                            {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-2">Age</label>
                            <input
                                type="number"
                                {...register("age", { required: "Age is required", min: 1 })}
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                            {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-2">Salary</label>
                            <input
                                type="number"
                                {...register("salary", { required: "Salary is required", min: 0 })}
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                            {errors.salary && <p className="text-red-500 text-sm">{errors.salary.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

