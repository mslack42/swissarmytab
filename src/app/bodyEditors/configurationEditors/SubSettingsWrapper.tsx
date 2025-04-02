import { Separator } from "@/components/ui/separator";
import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { squaresService } from "@/store/services/squaresService";
import { ChevronLeft } from "lucide-react";

type SubSettingsWrapperProps = {
    panelId: string
}

export function SubSettingsWrapper(props: React.PropsWithChildren<SubSettingsWrapperProps>) {
    const back = () => {
        squaresService.transformSquare(props.panelId, BodyEditorId.settings)
    }
    
    return <>
    <div className="w-full align-middle">
        <button onClick={back} className="rounded-lg bg-slate-600 hover:bg-slate-400"><ChevronLeft size={24}/></button>
    </div>
    <Separator/>
    <div className="w-full h-full">
        {props.children}
    </div>
    </>
}