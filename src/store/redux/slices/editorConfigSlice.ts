import { BodyEditorId } from "@/staticAppData/BodyEditorId"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

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
        toggleFavourite: (state, action: PayloadAction<BodyEditorId>) => {
            let newFavs = [...state.favouriteEditors]
            if (newFavs.includes(action.payload)) {
                newFavs = newFavs.filter(b => b != action.payload)
            } else {
                newFavs = [...newFavs, action.payload]
            }
            state.favouriteEditors = newFavs
        },
        toggleEnabled: (state, action: PayloadAction<BodyEditorId>) => {
            let newList = [...state.enabledEditors]
            if (newList.includes(action.payload)) {
                newList = newList.filter(b => b != action.payload)
            } else {
                newList = [...newList, action.payload]
            }
            state.enabledEditors = newList
        }
    }
})

export const isFavouriteEditor: ((bodyEditorId: BodyEditorId) => ((state: RootState) => boolean)) = (bodyEditorId: BodyEditorId) => ((state: RootState) => state.editorConfigs.favouriteEditors.includes(bodyEditorId))
export const isEnabledEditor: ((bodyEditorId: BodyEditorId) => ((state: RootState) => boolean)) = (bodyEditorId: BodyEditorId) => ((state: RootState) => state.editorConfigs.enabledEditors.includes(bodyEditorId))

export const { toggleFavourite, toggleEnabled } = editorConfigSlice.actions

export default editorConfigSlice.reducer