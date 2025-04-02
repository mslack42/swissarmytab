import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

type ContextMenuAction = {
  itemType: "action";
  title: string;
  command?: string;
  actionId: string;
};
type ContextMenuSubMenu = {
  itemType: "submenu";
  title: string;
  submenu: ContextMenuRow[];
};
type ContextMenuSeparatorData = {
  itemType: "separator";
};
export type ContextMenuRow =
  | ContextMenuAction
  | ContextMenuSubMenu
  | ContextMenuSeparatorData;

export type ContextMenuConfiguration = {
  items: ContextMenuRow[];
};

type ConfigurableContextProps = {
  configuration: ContextMenuConfiguration;
  onActionSelection?: (actionId: string) => void;
};

export function ConfigurableContext(
  props: React.PropsWithChildren<ConfigurableContextProps>,
) {
  const configuration = props.configuration;
  const emitSelection = props.onActionSelection ?? (() => {});

  const rowComponent = (item: ContextMenuRow, id: number) => {
    switch (item.itemType) {
      case "action":
        return (
          <ContextMenuItem
            className="text-sm h-6"
            onClick={() => emitSelection(item.actionId)}
            key={id.toString()}
          >
            {item.title}
            {item.command ? (
              <ContextMenuShortcut>{item.command}</ContextMenuShortcut>
            ) : (
              <></>
            )}
          </ContextMenuItem>
        );
      case "separator":
        return (
          <ContextMenuSeparator key={id.toString()}></ContextMenuSeparator>
        );
      case "submenu":
        return (
          <ContextMenuSub key={id.toString()}>
            <ContextMenuSubTrigger className="text-sm h-6">
              {item.title}
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              {item.submenu.map((it, id2) => rowComponent(it, id2))}
            </ContextMenuSubContent>
          </ContextMenuSub>
        );
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full h-full">
        {props.children}
      </ContextMenuTrigger>
      <ContextMenuContent className="z-50">
        {configuration.items.map((it, id) => rowComponent(it, id))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
