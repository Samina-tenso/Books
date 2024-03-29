import e from "cors";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Container from "@mui/material/Container"

const dbUrl = "http://localhost:4000/books"

export default function Books() {






    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const [prevBooks, setPrevBooks] = useState([])


    useEffect(() => {
        if (!isOpen) {
            fetch(dbUrl)
                .then(res => res.json())
                .then(book => {
                    console.log(book)
                    setPrevBooks([...book])
                }).catch(error => {
                    console.error(error)
                })



        }


    }, [])


    const handleRemove = (id) => {
        console.log(id)
        let newUrl = `http://localhost:4000/books/${id}`
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
                        <li className="   flex sm:flex-nowrap flex-wrap space-x-2 space-y-4 " key={book.Book_ID}>
                            <div className="flex w-1/6" >
                                <input className="checked:bg-black hover:bg-gold hover:border-gold rounded-full self-center appearance-none h-8 w-8 border-2 border-black" type="checkbox" />
                            </div>
                            <div className="flex w-2/6">
                                <h2 className="text-sm  "><span className="text-lg  ">{book.Title} </span><br /> <span className="">{book.Author}</span><br /><span className="font-thin ">{book.Comments}</span></h2>
                            </div>
                            <div className="flex w-4/6 flex-wrap">
                                <div className="flex flex-wrap min-w-fit  w-1/2 ">
                                    <button className="   my-2 active:bg-black active:text-white btn h-10 shadow-xl bg-white  px-2 hover:bg-[#C79C2F]" type="button" onClick={() => handleRemove(book.Book_ID)}> REMOVE </button>
                                </div>
                                <div className="flex  w-1/2 ">
                                    <button className="   my-2 btn  h-10  shadow-xl bg-white  px-4 hover:bg-[#C79C2F]" type=" button"> EDIT </button>
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
