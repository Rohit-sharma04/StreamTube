const SearchShimmer = () => {
return(
    Array(10).fill("").map((ele, index) => {
        return (<div className="flex  sm:mx-5" key={index}>
                <div className=" sm:w-[320px] bg-gray-400  sm:h-[180px]  w-2/5  aspect-video rounded-lg m-2 "></div>
                <div className="p-2  w-2/5">
                    <p className="leading-relaxed mb-3 w-full h-4 animate-pulse bg-gray-400 rounded-sm"></p>
                    <p className="leading-relaxed mb-3 w-2/3 h-4 animate-pulse bg-gray-400 rounded-sm"></p>
                    <p className="bg-gray-300 h-3 animate-pulse mt-1 w-32 inline-flex items-center lg:mb-0 mb=0 rounded-sm"></p>
                    <p className="bg-gray-300 w-16 sm:mt-2  h-3 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-sm"></p>

                </div>
            </div>

        )
    }

    )

)
}   

export default SearchShimmer
