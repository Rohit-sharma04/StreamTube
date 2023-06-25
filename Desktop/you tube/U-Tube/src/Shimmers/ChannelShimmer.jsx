const ChannelShimmer = () => {
  return (
    <div className="mt-5">
    <div className="flex flex-col ">

        <div className=" h-52 w-52 bg-gray-400 rounded-full m-auto mb-10"></div>
        <p className="bg-gray-400 w-52 mt-2 h-6 animate-pulse m-auto  rounded-sm mb-5"></p>


        <div className="p-2 ">
            <div className="flex justify-center mb-5">

                <p className="bg-gray-300 h-4 animate-pulse mt-1 w-32   mx-4 rounded-sm "></p>

                <p className="bg-gray-300 w-16 mt-1 h-4 animate-pulse mx-4   rounded-sm"></p>
                <p className="bg-gray-300 h-4 animate-pulse mt-1 w-32 mx-4  rounded-sm"></p>

            </div>

            <p className="leading-relaxed mb-3 w-full h-4 animate-pulse bg-gray-400 rounded-sm"></p>
            <p className="leading-relaxed mb-3 w-full h-4 animate-pulse bg-gray-400 rounded-sm"></p>

            <p className="bg-gray-300 h-3 animate-pulse mt-1 w-2/3 inline-flex items-center lg:mb-0 rounded-sm"></p>

            <br />
            <p className="bg-gray-300 w-16 mt-2 h-3 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-sm"></p>


        </div>
    </div>

    <div className="flex flex-wrap  justify-center mt-5 ">

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



</div>
  )
}

export default ChannelShimmer

// </div >
// </div >