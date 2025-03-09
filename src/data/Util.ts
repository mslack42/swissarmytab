export type GuidIsh = string
export type Util = {
    readonly id: GuidIsh;
    readonly name:string;
    readonly bodyEditors: GuidIsh[];
    readonly contextEditors: GuidIsh[];
    readonly tags: GuidIsh[]
}

// body editor guids effectively link the util to components in which editing can be done
// context editor guids effectively link the util to context-menu actions
// tags will be functionality-based tags for discoverability