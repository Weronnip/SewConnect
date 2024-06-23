import styles from "../Styles/style.module.css"
import { DownloadBlockComponentUI } from "../components/downloads_componnets/comonents_download";

export function DownloadPage() {

    return (
        <>
            <section className={styles.section_one}>
                <DownloadBlockComponentUI/>
                
            </section>  
        </>
    );
}