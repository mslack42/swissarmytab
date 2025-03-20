import { createSlice } from "@reduxjs/toolkit"

export type TextStorageData = {
    lastModified: number,
    created: number,
    content: string
}

export type TextStorageState = {
    [key: string]: TextStorageData
}

const initialState: TextStorageState = {
    "/root/xslts/test1.xslt": {
        lastModified: Date.now(),
        created: Date.now(),
        content: "Lorem Ipsum"
    },
    "/root/xslts/test2.xslt": {
        lastModified: Date.now(),
        created: Date.now(),
        content: "Lorem Ipsum2"
    },
    "/root/homework/diary.txt": {
        lastModified: Date.now(),
        created: Date.now(),
        content: "Lorem Ipsum2"
    }
}

export const textStorageSlice = createSlice({
    name: "textStorage",
    initialState,
    reducers: {
        doNothing: () => {
            console.log("implement stuff here")
        }
    }
})

export const { doNothing} = textStorageSlice.actions

export default textStorageSlice.reducer