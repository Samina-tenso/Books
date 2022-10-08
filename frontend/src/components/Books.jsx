

import React, { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../stores/recoil/atom";

const dbUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000/books"


export default function Books() {

    const [isOpen] = useRecoilState(modalState)
    const [prevBooks, setPrevBooks] = useState([])
    useEffect(() => {
        console.log(prevBooks)
        if (!isOpen) {
            console.log(prevBooks)

            fetch(dbUrl)
                .then(res => res.json())
                .then(book => {
                    console.log(book)

                    setPrevBooks([...book])
                    console.log(prevBooks)

                }).catch(error => {
                    console.error(error)
                })

        }
    }, [])


    const handleRemove = (id) => {
        console.log(typeof id)
        let newUrl = `${dbUrl}/${id}`
        fetch(newUrl,
            {
                method: "DELETE",

            })
    }

    return (
        <div className=" container">
            < ul className=""> {
                prevBooks.map((book) => {
                    return (
                        <li className="   flex sm:flex-nowrap flex-wrap space-x-2 space-y-4 " key={book.book_id}>
                            <div className="flex w-1/6" >
                                <input className="checked:bg-black rounded-full font-light self-center appearance-none h-8 w-8 border-2 border-black" type="checkbox" />
                            </div>
                            <div className="flex w-2/6">
                                <h2 className="text-sm  "><span className="text-lg   ">{book.title} </span><br /> <span className="font-semibold">{book.author}</span><br /><span className="font-thin ">{book.comments}</span></h2>
                            </div>
                            <div className="flex w-4/6 flex-wrap">
                                <div className="flex flex-wrap min-w-fit  w-1/2 ">
                                    <button className="   my-2 active:bg-black active:text-white btn h-10 shadow-xl bg-white hover:text-white px-2 hover:bg-teal" type="button" onClick={() => handleRemove(book.book_id)}> REMOVE </button>
                                </div>
                                <div className="flex  w-1/2 ">
                                    <button className="   my-2 btn  h-10  shadow-xl bg-white hover:text-white px-4 hover:bg-teal" type=" button"> EDIT </button>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
            </ul >
        </div >
    )
}
