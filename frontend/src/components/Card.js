import { useEffect, useState } from "react";

const Card = ({
    isError,
    header,
    highlight, //error,
    input //clause from user

}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [explanation, setExplanation] = useState("")
    const color = isError ? "bg-red-600" : "bg-green-600"
    useEffect(() => {
        // Determine the correct endpoint based on whether it's an error or not
        const apiUrl = isError ? '/dict-error/' : '/dict-no-error/';

        // Prepare the request body
        const requestBody = {
            clause: input,
            ...(isError && { error: highlight, rule: header }), // Include error and rule if isError is true
        };

        //Fetch explanation for dict-error from GPT and update explanation state
        const fetchExplanation = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setExplanation(data.reply);
            } catch (error) {
                console.error('Failed to fetch explanation:', error);
                setExplanation('Failed to fetch explanation.');
            }
        };

        //FOR DICT-ERROR EXPLANATION (TOP BRANCH)
        //Call api to ask gpt to explain with the following request body: clause (from input), error (from highlight), rule (from rule[header])
        fetchExplanation
    },[isError, header, highlight, input])


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