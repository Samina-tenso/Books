
import {
    atom
} from "recoil"

export const modalState = atom({
    key: "modalState",
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

