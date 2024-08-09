import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"



const Home = () => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5000/api/books")
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl my-8">Book List</h1>
                    <NavLink to="/books/create">
                        {console.log(book)}
                        <MdOutlineAddBox className="text-sky-800 text-4xl" />
                    </NavLink>
                </div>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <table className="w-full border-separate border-spacing-2">
                            <thead>
                                <tr>
                                    <th className="border border-slate-600 rounded-md">No</th>
                                    <th className="border border-slate-600 rounded-md">Title</th>
                                    <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                                    <th className="border border-slate-600 rounded-md">Operations</th>
                                </tr>
                            </thead>
                            <tbody className="text-black">
                                {
                                    book.map((currElem, index) => {
                                        return(
                                        <tr key={currElem._id} className="h-8">
                                            {/* {console.log(currElem.title, currElem.author, currElem.publishYear, index)} */}
                                            <td className="border border-slate-700 rounded-md text-center">
                                                {index+1}
                                            </td>
                                            <td className="border border-slate-700 rounded-md text-center">
                                                {currElem.title}
                                            </td>
                                            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                                {currElem.author}
                                            </td>
                                            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                                {currElem.publishYear}
                                            </td>
                                            <td className="border border-slate-700 rounded-md text-center">
                                                <div className="flex justify-center gap-x-4">
                                                    <NavLink to={`/books/details/${currElem._id}`}>
                                                        <BsInfoCircle className="text-2xl text-yellow-600" />
                                                    </NavLink>
                                                    <NavLink to={`/books/edit/${currElem._id}`}>
                                                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                                                    </NavLink>
                                                    <NavLink to={`/books/delete/${currElem._id}`}>
                                                        <MdOutlineDelete className="text-2xl text-red-600" />
                                                    </NavLink>
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        </>
    )
}

export default Home