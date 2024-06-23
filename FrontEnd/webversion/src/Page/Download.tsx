import styles from "../Styles/style.module.css"

export function DownloadPage() {

    return (
        <>
            <section className={styles.section_one}>
                <div className="w-[90%] h-80 mx-[5%] my-11 bg-slate-700 rounded-xl
                                absolute justify-center flex">
                    <div className="bg-emerald-400 flex justify-center w-52 h-7 rounded-b-lg">
                    <h3 className="text-balance">Download Sow Connection</h3>
                    </div>
                </div>
            </section>  
        </>
    );
}