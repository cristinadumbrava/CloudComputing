'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteRecord, getRecords } from "../utils/recordsFunctions";
import Spinner from "./Spinner";

const MainPage = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [password, setPassword] = useState('#passwordTest379@');
    const [error, setError] = useState(''); 
    const [isAdmin, setIsAdmin] = useState(false);


    const fetchRecords = async () => {
        const response = await getRecords();
        setData(response);
        setIsLoading(false);
    }

    const requestAdminAccess = () => {
        const userPassword = prompt("Enter admin password:");
        if (userPassword === password) {
            setIsAdmin(true);
            return true;
        } else {
            alert("Incorrect password!");
            return false;
        }
    };
    

    const handleDelete = async (id) => {
        if (!isAdmin && !requestAdminAccess()) return;
    
        try {
            const response = await deleteRecord(id);
            if (response?.acknowledged) {
                const newData = data.filter((el) => el._id !== id);
                setData(newData);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    const handleRecordUpdate = (id) => {
        if (!isAdmin && !requestAdminAccess()) return;
        router.push(`/records/${id}`);
    };
    


    useEffect(() => {
        fetchRecords();
    }, [])


    if(isLoading){
        return <Spinner/>
    }


    const filteredData = data.filter(record =>
        record.title?.toLowerCase()?.includes(searchTerm.toLowerCase())
    );

    const handleAddClick = () => {
        setError("");
        const userPassword = prompt("Enter admin password to add a new book:");
        if (userPassword === null) return;

        if (userPassword === password) {
            console.log("Password correct, redirecting to /records/create");
            router.push(`/records/create`);  
        } else {
            alert("Incorrect password! You can not add a book.");
        }
    };


    return (
        <div className="p-10 max-w-5xl mx-auto ">
            <h1 className="text-4xl font-bold text-center mb-10 italic">
                My Personal Book Collection
            </h1>
        
            <div className="flex items-center gap-4 mb-10 justify-center">
                <input
                    type="text"
                    placeholder="Search books by title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-60"  
                />
                <button
                    onClick={handleAddClick}
                    className="bg-sky-600 hover:bg-sky-700 focus:ring-sky-300 dark:focus:ring-sky-900
                    text-white px-4 py-2 rounded "
                >
                    Add a Book
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-30 mt-20">
                {filteredData.length > 0 ? (
                    filteredData.map((record) => (
                        <div 
                            key={record._id}
                            className="w-90 max-w-xs h-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between text-center mx-auto"
                        >
                          
                            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                {record.title}
                            </p>

                            <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {record.author}
                            </p>
                            
                            
                            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                                {record.description}
                            </p>
                            <button 
                            type="button" 
                            className="focus:outline-none text-white bg-teal-600 hover:bg-teal-700 focus:ring-teal-300 dark:focus:ring-teal-900
                            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                            onClick={() => handleRecordUpdate(record._id)}
                            >
                            Update
                            </button>
                        <button 
                            type="button" 
                            className="focus:outline-none text-white bg-red-800 hover:bg-red-900 focus:ring-red-700 dark:bg-red-900 dark:hover:bg-red-950 dark:focus:ring-red-800
                            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            onClick={() => handleDelete(record._id)}
                            >
                            Delete
                        </button>

                        </div>
                    ))
                ) : (
                    <p>No books found matching "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
}

export default MainPage;