import "../Styles/Modal.css"
import { Dialog } from "@material-tailwind/react";
import { modalState, titleInput, authorInput, commentsInput } from "../atom"
import "../Styles/input.css"
import { useRecoilState, useRecoilValue } from "recoil"


export default function ModalBox() {
    const [title, setTitleInput] = useRecoilState(titleInput)
    const [author, setAuthorInput] = useRecoilState(authorInput)
    const [comments, setCommentsInput] = useRecoilState(commentsInput)
    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const dbUrl = "http://localhost:4000/books"

    const handleClose = (e) => {
        e.preventDefault()
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
                    "title": title,
                    "author": author,
                    "comments": comments,
                })


            })


    }
    return (
        <>


            <Dialog open={isOpen} className="">

                <div
                    class="modal-content bg-red-grey border-none shadow-lg relative flex flex-col w-full  pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <h1 className="text-xl my-2 place-self-center text-black"> Add book</h1>


                    <input type="text" id="item-input" name="text" className="mx-2 pl-2 focus:border  text-black focus:outline-none" placeholder=" Title" onChange={(e) => {
                        setTitleInput(e.target.value)
                    }} />
                    <input type="text" id="item-input" name="text" className="mx-2  pl-2 focus:border border-red-grey text-black focus:outline-none" placeholder="Author" onChange={(e) => {
                        setAuthorInput(e.target.value)
                    }} />
                    <input type=" text" id="item-input" name="text" className="mx-2   pl-2  focus:border  text-black focus:outline-none" placeholder="Comments" onChange={(e) => {
                        setCommentsInput(e.target.value)
                    }} />
                    <button type="btn-close" className=" my-4 mx-4  shadow-xl bg-white  hover:text-white px-4 py-2 text-black hover:bg-teal" onClick={handleClose}>Close</button>
                    <button className="my-4 mx-4 h-10  shadow-xl bg-white  px-4 text-black hover:text-white hover:bg-teal" type="submit" onClick={(e) => { submitBook(); handleClose(e) }}> Save</button>
                </div>

            </Dialog>
        </>

    )
}