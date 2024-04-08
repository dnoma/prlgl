import logo from "../assets/prlgl-logo.png"
import Card from './Card';
const Sidebar = ({
    foundErrors,
    analyseClause,
    setTotalErrors,
    totalErrors,
    firstCheck,
    setFirstCheck,
    institutionFound,
    input
}) => {
    return (
        <div className="overflow-auto flex flex-col items-center w-full h-screen border-box bg-white shadow-[rgba(0,0,15,0.1)_-4px_0_4px_0px] px-8 py-6">
            <div className="w-full rounded-md flex items-center gap-3">
                <img src={logo} width={75} height={75} alt="" />
                <div>
                    <h2 className="font-bold text-lg">Suggested Reviews ({totalErrors})</h2>
                    <button onClick={() => {
                        setTotalErrors(0);

                        analyseClause();


                    }} className=" bg-indigo-400 rounded-md shadow py-2 hover:bg-indigo-600 text-xs text-white font-semibold my-2 px-8">Review Clause</button>
                </div>
            </div>

            {(firstCheck) ? <div className="flex flex-col items-center my-6 w-full">
                {(totalErrors === 0 && institutionFound) ? (<Card isError={false} header="No Errors" highlight="No Errors Found" {...{ input }} />) :
                    <>
                        {foundErrors.length > 0 ? (
                            foundErrors.map((foundItem, index) => (
                                <div className="w-full" key={index}>
                                    {foundItem.phrases.map((phrase, index) => (
                                        <Card isError={true} header={foundItem.category} highlight={phrase} key={index} {...{ input }} />
                                    ))}
                                </div>
                            ))
                        ) : <></>
                        }
                        {
                            (!institutionFound) ? <Card isError={true} header="Unknown Institution" highlight="The arbitration body or institution overseeing the proceedings is either: (i) not clearly stated, (ii) fictional, or (iii) not known for arbitration. Please review and confirm what is agreed between the parties." {...{ input }} /> : <></>
                        }
                    </>
                }

            </div> : <></>}
        </div>

    );
}

export default Sidebar;