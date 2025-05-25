import { useRouter } from "next/navigation";
import { useState } from "react";

const RecordForm = ({entry, onSubmit}) => {
    const [data, setData] = useState(entry);
    const router = useRouter();

    const handleCancelButton = () => {
        router.push(`/records`)
    }

    const handleChange = (key, value) => {
        setData((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(data);
        onSubmit(data);
    }

    return (
        <div className="mt-15">
            <form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
                <div className="text-4xl text-center mb-10 italic ">
                    {data?._id ? "Update Book" : "Add Book"}
                </div>
            <div className="mb-5">
                <label 
                htmlFor="title" className="block mb-2 mt-20 text-sm font-medium text-gray-900 dark:text-white
                text-xl">Title</label>
                <input 
                type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text" 
                required 
                value={data.title}
                onChange={(e)=>handleChange('title', e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="author" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Author</label>
                <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" required 
                value={data.author}
                onChange={(e)=>handleChange('author', e.target.value)}
                />
                <label 
                htmlFor="description" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Description</label>
                <input type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
                value={data.description}
                onChange={(e)=>handleChange('description', e.target.value)}
                />
            </div>
            
            <div className="flex gap-4 justify-center mt-10">
            <button type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            {data._id ? "Update" : "Add"}
            </button>

            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleCancelButton}>Cancel</button>
            </div>
            
            </form>
        </div>
    )
}

export default RecordForm;