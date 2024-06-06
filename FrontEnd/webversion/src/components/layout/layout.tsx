import { BiHome } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { GiUpgrade } from "react-icons/gi";
import { ImDownload } from "react-icons/im";
import styles from '../../Styles/style.module.css'
import { RiAccountCircleLine } from "react-icons/ri";

export function Layout() {

    return (
        <>
            <header className={styles.header_site}>
                <div className="flex px-20 top-6 relative">
                    <h2 className="text-cyan-600 text-3xl">Sew Connection</h2>
                    <ul className={styles.nav_item}>
                        <li className={styles.li_item}>
                            <a href="/" className={styles.a_bth}>
                                <BiHome className="my-auto mx-[2px]"/>Home</a>
                        </li>
                        <li className={styles.li_item}>
                            <a href="/download" className={styles.a_bth}>
                            <ImDownload className="my-auto mx-[2px]"/>Download</a>
                        </li>
                        <li className={styles.li_item}>
                            <a href="/premium" className={styles.a_bth}>
                            <GiUpgrade className="my-auto mx-[2px]"/>Premium</a>
                        </li>
                        <li className={styles.li_item}>
                            <a href="/profile" className={styles.a_bth}>
                            <RiAccountCircleLine className="my-auto mx-[2px]"/>Profile</a>
                        </li>
                    </ul>
                </div>
            </header>

            <Outlet />

            <footer className={styles.footer_site}>
                <div className=""></div>
            </footer>
        </>
    );
}