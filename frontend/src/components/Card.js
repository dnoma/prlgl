import { useEffect, useState } from "react";

const Card = ({
    isError,
    header,
    highlight
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const color = isError ? "bg-red-600" : "bg-green-600"

    return (
        <div className={"w-full shadow-md my-4"}>
            <div className={"h-2 w-full " + color}></div>
            <div className="p-3 box-border border-2 border-t-transparent">
                <h4 className="font-semibold text-sm">{header}</h4>
                <p className="text-sm italic">{highlight}</p>
            </div>

        </div>
    );
}

export default Card;