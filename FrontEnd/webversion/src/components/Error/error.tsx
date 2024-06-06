
export function Error() {

    return (
        <>
            <div className="bg-slate-700 m-auto top-[120px] w-[500px] relative 
                            h-[500px] flex justify-center items-center rounded-2xl">
                <div className="">
                    <h3 className="text-red-500 text-[50px] text-center">Ups... 404</h3>
                    <p className="text-red-500 text-center text-[25px]">This page Not Found 
                            <a href="/" className="text-red-500 hover:text-emerald-400 
                            transition-colors ease-in-out duration-300"> Return home page</a>
                    </p>
                </div>
            </div>
        </>
    );
}