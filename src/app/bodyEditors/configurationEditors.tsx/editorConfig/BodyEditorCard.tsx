import { BodyEditorId } from "@/staticAppData/BodyEditorId";
import { Editors } from "@/staticAppData/Editors";

type BodyEditorCardProps = {
    bodyEditorId: BodyEditorId;
};

export function BodyEditorCard({ bodyEditorId }: BodyEditorCardProps) {
    const data = Editors[bodyEditorId];

    return <div className="h-28 w-52">
        <h2 className="text-xl">{data?.name}</h2>
        <p>{data?.description}</p>
    </div>;
}
