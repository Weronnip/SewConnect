import styles from '../Styles/style.module.css'

export function HomePage() {
    return (
        <>
        <section className={styles.section_about}>
            <div className="inline-block mx-[10px] absolute">
                <div className={styles.block_content}></div>
                <div className={styles.block_content}></div>
                <div className={styles.block_content}></div>
                <div className={styles.block_content}></div>
                <div className={styles.block_content}></div>
                <div className={styles.block_content}></div>
            </div>
        </section>        
        </>
    );
}