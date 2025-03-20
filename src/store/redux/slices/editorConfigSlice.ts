import { createSlice } from "@reduxjs/toolkit"

enum BodyEditorId {
    text = "text",
    json = "json"
}

export type EditorConfig = {
    [key: string]: unknown
}

enum ContextMenuActionId {
    xmlToJson = "xmlToJSON",
    unescapeJson = "unescapeJSON"
}

export type EditorConfigState = {
    favouriteEditors: BodyEditorId[]
    enabledEditors: BodyEditorId[],
    editorConfigs: {
        [key in BodyEditorId]?: EditorConfig
    },
    enabledContextMenuActions: ContextMenuActionId[],
    contentMenuActionConfigs: {
        [key in ContextMenuActionId]?: EditorConfig
    }
}

const initialState: EditorConfigState = {
    favouriteEditors: [],
    enabledEditors: [],
    editorConfigs: {
        text: {}
    },
    enabledContextMenuActions: [],
    contentMenuActionConfigs: {
        xmlToJSON: {}
    }
}

export const editorConfigSlice = createSlice({
    name: "editorConfig",
    initialState,
    reducers: {
        doNothing: () => {
            console.log("implement stuff here")
        }
    }
})

export const { doNothing} = editorConfigSlice.actions

export default editorConfigSlice.reducer