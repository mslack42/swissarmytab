import { DockviewApi, SerializedDockview } from "dockview";


export function exampleConfig(api: DockviewApi) {
    const jsonObj: SerializedDockview = {
        "grid": {
            "root": {
                "type": "branch",
                "data": [
                    {
                        "type": "leaf",
                        "data": {
                            "views": [
                                "panel_1",
                                "panel_2",
                                "panel_3"
                            ],
                            "activeView": "panel_1",
                            "id": "1"
                        },
                        "size": 519
                    },
                    {
                        "type": "branch",
                        "data": [
                            {
                                "type": "leaf",
                                "data": {
                                    "views": [
                                        "panel_4",
                                        "panel_5"
                                    ],
                                    "activeView": "panel_5",
                                    "id": "2"
                                },
                                "size": 369
                            },
                            {
                                "type": "branch",
                                "data": [
                                    {
                                        "type": "branch",
                                        "data": [
                                            {
                                                "type": "leaf",
                                                "data": {
                                                    "views": [
                                                        "panel_7"
                                                    ],
                                                    "activeView": "panel_7",
                                                    "id": "4"
                                                },
                                                "size": 179.5
                                            },
                                            {
                                                "type": "leaf",
                                                "data": {
                                                    "views": [
                                                        "panel8"
                                                    ],
                                                    "activeView": "panel8",
                                                    "id": "5"
                                                },
                                                "size": 179.5
                                            }
                                        ],
                                        "size": 252
                                    },
                                    {
                                        "type": "leaf",
                                        "data": {
                                            "views": [
                                                "panel_6"
                                            ],
                                            "activeView": "panel_6",
                                            "id": "3"
                                        },
                                        "size": 258
                                    }
                                ],
                                "size": 364
                            }
                        ],
                        "size": 515
                    }
                ],
                "size": 738
            },
            "width": 1039,
            "height": 738,
            "orientation": "HORIZONTAL"
        },
        "panels": {
            "panel_1": {
                "id": "panel_1",
                "contentComponent": "default",
                
                "title": "Panel 1",
                "renderer": "always"
            },
            "panel_2": {
                "id": "panel_2",
                "contentComponent": "default",
                
                "title": "Panel 2"
            },
            "panel_3": {
                "id": "panel_3",
                "contentComponent": "default",
               
                "title": "Panel 3"
            },
            "panel_4": {
                "id": "panel_4",
                "contentComponent": "default",
                
                "title": "Panel 4"
            },
            "panel_5": {
                "id": "panel_5",
                "contentComponent": "default",
                
                "title": "Panel 5"
            },
            "panel_6": {
                "id": "panel_6",
                "contentComponent": "default",
                
                "title": "Panel 6"
            },
            "panel_7": {
                "id": "panel_7",
                "contentComponent": "default",
               
                "title": "Panel 7"
            },
            "panel8": {
                "id": "panel8",
                "contentComponent": "default",
                
                "title": "Panel 8"
            }
        },
        "activeGroup": "1"
    };
    api.fromJSON(jsonObj);
}
