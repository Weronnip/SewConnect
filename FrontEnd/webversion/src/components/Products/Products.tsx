import { Fragment, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export function Products() {
    const [IsOpen, SetIsOpen] = useState(false);
    const { isPending, error, data} = useQuery({
        queryKey: ['Items'],
        queryFn: () => 
            fetch('http://localhost:3400/api/items').then((res) => 
            res.json(),
        ),
    })

    if (isPending) return 'Loading...';
    if (error) return 'An error has occured:' + error.message;
    console.log(data);
    

    function detailsProduct() {
        
        if (IsOpen) {
            return data.map((data: any) => (
                <>
                    <div className="bg-slate-500/20 w-[640px] h-[640px] m-auto" >
                        <img src={data.Item_Image} alt="products" className="w-96 h-96 rounded-xl justify-center absolute mt-3"/>
                        <h4 className="mt-[405px] justify-center text-[30px]">{data.IName}</h4>
                        <p className="">{data.IAbout}</p>
                        <button className="text-[20px] absolute mt-[280px] bg-lime-200 px-3 translate rounded-md 
                                            duration-500 hover:rounded-xl">Buy {data.IPrice}$</button>
                    </div>
                </>
            ))
        }
        SetIsOpen(IsOpen)
        console.log(detailsProduct);
    }
    
    return data.map((data: any) => (
        <>
            <Fragment key={data.itemID}>
                <div className="bg-slate-600/70 w-96 h-[340px] rounded-xl relative flex justify-center">
                    <img src={data.Item_Image} alt="products" className="w-64 h-52 rounded-xl justify-center absolute mt-3"/>
                    <h4 className="mt-[215px] justify-center text-[25px]">{data.IName}</h4>
                    <button className="absolute mt-[255px] bg-emerald-400 text-white px-2 text-[13px] 
                                        duration-300 translate rounded-md hover:rounded-xl" onClick={() => detailsProduct}>More detailed</button>
                    <button className="text-[20px] absolute mt-[280px] bg-lime-200 px-3 translate rounded-md 
                                        duration-500 hover:rounded-xl">Buy {data.IPrice}$</button>
                </div>
            </Fragment>
        </>
    ));

    
}