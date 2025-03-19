import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useRef } from "react";

type RenameSquareDialogProps = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  tabName: string;
  onClose: (newName: string) => void;
};

export function RenameSquareDialog(props: RenameSquareDialogProps) {
  const input = useRef<HTMLInputElement>(null);
  return (
    <Dialog
      open={props.open}
      onOpenChange={(nowOpen: boolean) => {
        if (!nowOpen && input.current) {
          props.onClose(input.current.value);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename {props.tabName}</DialogTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.onClose(input.current!.value);
            }}
          >
            <input type="text" defaultValue={props.tabName} ref={input} />
            <input type="submit" hidden />
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
