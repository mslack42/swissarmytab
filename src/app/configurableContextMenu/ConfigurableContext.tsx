import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { ContextMenuContent } from "@radix-ui/react-context-menu"

type ContextMenuConfiguration = {

}

type ConfigurableContextProps = {
    configuration: ContextMenuConfiguration
}

export function ConfigurableContext(props: React.PropsWithChildren<ConfigurableContextProps>)
{
    return <ContextMenu>
        <ContextMenuTrigger className="w-full h-full">{props.children}</ContextMenuTrigger>
        <ContextMenuContent className="w-32  bg-pink-500 z-50">
            <ContextMenuItem className="text-sm h-6">
                TODO
            </ContextMenuItem>
        </ContextMenuContent>
    </ContextMenu>
}