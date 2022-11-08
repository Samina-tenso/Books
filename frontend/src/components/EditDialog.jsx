import React from 'react'
import { Dialog } from "@material-tailwind/react";
import { editDialogState, allBooks, titleInput, authorInput, currentBook, bookState, commentsInput, } from "../stores/recoil/atom"
import "../styles/input.css"
import { useRecoilState, useRecoilValue } from "recoil"
import { useRef } from 'react';
import { useEffect } from 'react';

export default function EditDialog() {
  const [title,] = useRecoilState(titleInput)
  const [author, setAuthorInput] = useRecoilState(authorInput)
  const [comments, setCommentsInput] = useRecoilState(commentsInput)
  const [editOpen, setEditOpen] = useRecoilState(editDialogState)
  const books = useRecoilValue(allBooks)
  const [changedBook, setChangedBook] = useRecoilState(currentBook)
  const bookId = useRecoilValue(bookState)
  const ref = useRef(null)

  const handleClose = (e) => {
    e.preventDefault()
    setEditOpen(false)
  }
  function editBook() {
    fetch(process.env.REACT_APP_BACKEND_URL,
      {
        method: "PATCH",
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

  useEffect(() => {
    function getBook(books) {
      return books
        .filter(function (obj) {
          return obj.book_id == bookId
        })
        .map(function (obj) {
          setChangedBook(prevState => ({
            ...prevState,
            title: obj.title
          }));
          return
        })
    }
    getBook(books)
  }, [])
  console.log(changedBook.title)

  return (
    <>
      <Dialog open={editOpen} className="">
        <div
          className="dialog-content bg-red-grey border-none shadow-lg relative flex flex-col w-full  pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <h1 className="text-xl my-2 place-self-center text-black"> Edit book</h1>
          <h2 ref={ref}>{changedBook.title}</h2>
          <input type="text" id="item-input" name="text" className="mx-2  pl-2 focus:border border-red-grey text-black focus:outline-none" placeholder="Author" onChange={(e) => {
            setAuthorInput(e.target.value)
          }} />
          <input type=" text" id="item-input" name="text" className="mx-2   pl-2  focus:border  text-black focus:outline-none" placeholder="Comments" onChange={(e) => {
            setCommentsInput(e.target.value)
          }} />
          <button type="btn-close" className=" my-4 mx-4  shadow-xl bg-white  hover:text-white px-4 py-2 text-black hover:bg-teal" onClick={handleClose}>Close</button>
          <button className="my-4 mx-4 h-10  shadow-xl bg-white  px-4 text-black hover:text-white hover:bg-teal" type="submit" onClick={(e) => { editBook(e); handleClose(e) }}> Save</button>
        </div>
      </Dialog>
    </>
  )
}