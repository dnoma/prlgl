import { useEffect, useState } from "react";

const Card = ({
    isError,
    header,
    highlight, //this is the error phrase,
    input //clause
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const color = isError ? "bg-red-600" : "bg-green-600"
    // access the rule using rule[header]
    const rule = {
        "Non-Binding Arbitration": "Uncertainty may arise if the arbitration clause indicates that the decision resulting from arbitration is only persuasive (i.e. not legally binding). This suggests that the arbitration process is merely a valuation or assessment – not a formal dispute resolution process.",
        "Alternative Dispute Resolution": "Uncertainty may arise if arbitration is only presented as a mere alternative option of dispute resoltuion.",
        "Optional Arbitration": "Uncertainty may arise in arbitration clauses which use the term 'may’ instead of 'shall'. This suggests that the parties are not obliged to arbitrate.",
        "Non-arbitrable matters": "For the subject matter to be arbitrable, it must be a matter contemplated within the arbitration clause. The precise nature of the matter sought to be arbitrated must be determined, and its arbitrability is to be ascertained upon a true construction of the arbitration clause.",
        "Unknown Institution": "This'body/institution' is either fictional or is not known for arbitration"
    }


    const [explanation, setExplanation] = useState("")

    useEffect(() => {
        // API-ROUTE
        //Fetch explanation for dict-error from GPT and update explanation state
    },[])

    return (
        <button onClick={() => setIsOpen(!isOpen)} className={"w-full shadow-md my-4 cursor-pointer"}>
            <div className={"h-2 w-full " + color}></div>
            <div className="p-3 box-border border-2 border-t-transparent">
                <h4 className="font-semibold text-sm">{header}</h4>
                {(!isOpen || "Unknown Institution") ? (<p className="text-sm italic">{highlight}</p>
                ) : (
                <p className="text-sm italic">Insert GPT Explanation here</p>)}

            </div>

        </button>
    );
}

export default Card;