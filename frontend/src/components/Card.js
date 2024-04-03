import { useEffect, useState } from "react";

const Card = ({
    isError,
    header,
    highlight
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const color = isError ? "bg-red-600" : "bg-green-600"
    useEffect(() => {
        // API-ROUTE
        //Fetch explanation for dict-error from GPT and update explanation state
    },[])


    return (
        <button onClick={() => setIsOpen(!isOpen)} className={"w-full shadow-md my-4 cursor-pointer text-left"}>
            <div className={"h-2 w-full " + color}></div>
            <div className="p-3 box-border border-2 border-t-transparent">
                <h4 className="font-semibold text-sm">{header}</h4>
                {(!isOpen || header === "Unknown Institution") ? (<p className="text-sm italic">{highlight}</p>
                ) : (
                <p className="text-sm italic">Insert GPT Explanation here</p>)}
            </div>

        </button>
    );
}

export default Card;