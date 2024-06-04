import { Outlet } from "react-router-dom";

export function Layout() {

    return (
        <>
            <header className="w-[80%] bg-slate-200 h-28 fixed left-[10%] border-solid rounded-b-3xl">
                <div className="flex px-20 justify-center align-middle">
                    <h2 className="text-cyan-600 text-3xl">Sew Connection</h2>
                    <ul className="px-8">
                        <li className=""><a href="" className=""></a></li>
                        <li className=""><a href="" className=""></a></li>
                        <li className=""><a href="" className=""></a></li>
                        <li className=""><a href="" className=""></a></li>
                    </ul>
                </div>
            </header>

            <Outlet />
        </>
    );
}