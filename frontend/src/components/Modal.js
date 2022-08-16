import "../Styles/Modal.css"
import { Dialog, Modal } from "@mui/material"
import { modalState, titleInput, authorInput, commentsInput } from "../atom"
import "../Styles/input.css"
import { useRecoilState, useRecoilValue } from "recoil"
import { useEffect } from "react"
import e from "cors"


export default function ModalBox() {
    const [title, setTitleInput] = useRecoilState(titleInput)
    const [author, setAuthorInput] = useRecoilState(authorInput)
    const [comments, setCommentsInput] = useRecoilState(commentsInput)
    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const dbUrl = "http://localhost:4000/books"


    const handleClose = () => {

        setIsOpen(false)
    }

    function submitBook() {


        fetch(dbUrl,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "Title": title,
                    "Author": author,
                    "Comments": comments,
                })


            })


    }
    return (
        <>


            <Dialog onClose={handleClose} open={isOpen} >

                <h1 className="text-xl  place-self-center"> Add book</h1>


                <input type="text" id="item-input" name="text" className="mx-2" placeholder=" Title" onChange={(e) => {
                    setTitleInput(e.target.value)
                }} />
                <input type="text" id="item-input" name="text" className="mx-2" placeholder="Author" onChange={(e) => {
                    setAuthorInput(e.target.value)
                }} />
                <input type="text" id="item-input" name="text" className="mx-2 " placeholder="Comments" onChange={(e) => {
                    setCommentsInput(e.target.value)
                }} />
                <button className="h-10   shadow-xl bg-white  px-4 hover:bg-gold mx-10 button" onClick={handleClose}> Cancel</button>
                <button className="button  mx-10" type="submit" onClick={() => { handleClose(); submitBook() }}> Save</button>

            </Dialog>
        </>

    )
}