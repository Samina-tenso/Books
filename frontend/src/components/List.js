
import {
    Button
} from "@material-tailwind/react";
import Books from "./Add"

import { modalState } from "../atom"
import { useRecoilState, useRecoilValue } from "recoil"

import ModalBox from "./Modal"



export default function List() {






    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const handleOpen = (e) => {
        e.preventDefault()
        setIsOpen(true)
    }



    return (
        <>
            <div className=" mx-auto max-w-md bg-red-grey my-4 py-4 space-y-4">
                <div className="flex justify-center ">
                    <h1 className="text-xl font-bold">Reading List</h1>
                </div> <div className="flex justify-center ">
                    <button className="my-2 active:outline-none h-10  shadow-xl bg-white  px-4 hover:bg-teal hover:text-white" onClick={handleOpen}> Add + </button>
                </div>
                <ModalBox />  <Books />

            </div>





        </>

    )
}