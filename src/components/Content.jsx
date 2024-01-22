import { Link, useParams } from "react-router-dom";
import data from "../apis/data.js";
import { WifiOff } from "react-feather";

export default function Content() {
    const {contentId} = useParams()

    const newData = data.find((data)=> data.id.toString() === contentId)

    if(!contentId){
        return (
            <main className="translate-x-44 translate-y-44">
                <div className="">
                    <WifiOff className="text-slate-400 text-center translate-x-48"/>
                    <p className="text-slate-400">{`Content can't be accessed! click the left nav to reload`}</p>
                </div>
            </main>
        )
    }

return (
    <>
        <main className="w-[80%] mx-auto mt-8"> 
            <section >
                {
                    newData && (
                        <>  
                            {/* Image Over */}
                            <aside className="h-[6em] w-[100%]">
                                <div className="h-[100%]  w-[100%]">
                                    <img src={newData.imgHeaders} alt="" className="h-[100%]  w-[100%] object-cover rounded-xl"/>
                                </div>
                            </aside>

                            {/* Details */}
                           <section className="flex gap-6">
                           <aside className="w-[50%]">
                                <div>
                                    <p className="bg-orange-500 w-[fit-content] rounded-xl mt-4 py-1 px-2 font-bold">{newData.catagories}</p>
                                    <h1 className="font-light text-4xl my-7">{newData.type}</h1>
                                    <p className="font-bold mb-4 text-2xl">{newData.region}</p>
                                </div>
                                <div>
                                    <p className="font-light">{newData.history}</p>
                                </div>

                                <div className="mt-4">
                                    <span>{`Learn more from`}</span>
                                    <Link to={newData.britannicaLink} target="_blank" className="text-orange-500 py-2 px-2 rounded-md inline mt-4 hover:underline hover:text-black">britannica</Link>
                                </div>
                            </aside>

                            {/* Image Cover */}
                            <aside className="w-[50%]">
                                <div>
                                    <img src={newData.imgCover} alt="" className="rounded-3xl mt-10"/>
                                </div>
                            </aside>
                            </section>
                        
                        </>
                    )
                }
            </section>

            <section>
                {
                    newData && (
                        <aside className="my-10">
                            
                        </aside>
                    )
                }
            </section>
        </main>
    </>
  )
}
