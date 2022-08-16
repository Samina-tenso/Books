

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
            <div className=" mx-auto max-w-md bg-red-grey space-y-4">
                <div className="flex justify-center ">
                    <h1 className="text-xl font-bold">Reading List</h1>
                </div> <div className="flex justify-center ">
                    <button className="btn h-10 w-20 shadow-xl bg-white px-2 hover:bg-gold" onClick={handleOpen}> Add + </button>
                </div>
                <ModalBox />  <Books />

            </div>





        </>

    )
}
