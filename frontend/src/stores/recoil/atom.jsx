
import {
    atom
} from "recoil"
export const allBooks = atom({
    key: "prevBooks",
    default: [],
})


export const dialogState = atom({
    key: "disalogState",
    default: false,
})

export const editDialogState = atom({
    key: "editState",
    default: false,
})

export const titleInput = atom({
    key: "title",
    default: ""
})

export const authorInput = atom({
    key: "author",
    default: ""
})

export const commentsInput = atom({
    key: "comments",
    default: ""
})

export const bookState = atom({
    key: "bookState",
    default: ""
})

export const currentBook = atom({
    key: "currentBook",
    default: {
        book_id: "",
        title: "",
        author: "",
        comments: ""
    }
})


