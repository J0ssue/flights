import TrashIcon from "./TrashIcon";

interface Props {
    id: string;
    type: "pre" | "post" | "normal";
    title: string;
    state: string;
    description: string;
    className: string;
    handleDelete: (id: string) => void;
    handleMove: (
        direction: "left" | "right",
        id: string,
        state: string
    ) => void;
}

const FlightDisplayCard = ({
    type,
    title,
    description,
    id,
    state,
    className,
    handleDelete,
    handleMove,
}: Props) => {
    var BorderColor = "border-blue-500";
    var BackgroundColor = "bg-blue-500";

    switch (type) {
        case "pre":
            BorderColor = "border-orange-500";
            BackgroundColor = "bg-orange-500";
            break;
        case "post":
            BorderColor = "border-green-500";
            BackgroundColor = "bg-green-500";
            break;
    }

    return (
        <div
            className={`relative p-4 bg-white rounded overflow-hidden border ${BorderColor} ${className}`}
        >
            <div
                className={`${BackgroundColor} absolute h-full w-[4px] left-0 top-0`}
            ></div>
            <div className="flex justify-between border-b border-slate-300">
                <h2 className="font-bold">{title}</h2>
                <button onClick={() => handleDelete(id)}>
                    <TrashIcon />
                </button>
            </div>
            <p className="mt-6">{description}</p>
            <div className="flex justify-end gap-x-1">
                <button
                    className="px-2 border border-slate-500 rounded-md"
                    onClick={() => handleMove("left", id, state)}
                >{`<`}</button>
                <button
                    className="px-2 border border-slate-500 rounded-md"
                    onClick={() => handleMove("right", id, state)}
                >{`>`}</button>
            </div>
        </div>
    );
};

export default FlightDisplayCard;
