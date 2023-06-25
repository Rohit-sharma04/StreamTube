
const HomeShimmer = () => {
    // const arr = new Array(10)
    // arr.fill("")
    return (
        <div className="flex flex-wrap  justify-center ">

            {
                Array(10).fill("").map((ele,index) => {
                    return ( <div key={index} className="m-2 w-80  shadow-lg hover:shadow-2xl ">
                            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className=" h-40 bg-gray-400 "></div>
                                <div className="p-2">

                                    <p className="leading-relaxed mb-3 w-full h-4 animate-pulse bg-gray-400 rounded-sm"></p>
                                    <p className="leading-relaxed mb-3 w-2/3 h-4 animate-pulse bg-gray-400 rounded-sm"></p>

                                    <p className="bg-gray-300 h-3 animate-pulse mt-1 w-32 inline-flex items-center lg:mb-0 rounded-sm"></p>

                                    <br/>
                                    <p className="bg-gray-300 w-16 mt-1 h-3 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-sm"></p>


                                </div>
                            </div>
                        </div>
                    )



                })
            }
        </div>

    )
}

export default HomeShimmer
