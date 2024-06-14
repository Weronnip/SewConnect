import styles from '../Styles/style.module.css'
import { Products } from '../components/Products/Products.tsx';
import { UpGrageNews } from '../components/news_company/update_product.tsx';

export function HomePage() {
    return (
        <>
        <section className={styles.section_one}>
            <div className={styles.cards}>
                <div className="grid grid-rows-1 grid-cols-3 gap-9">
                    <Products />
                    <Products />
                    <Products />
                </div>
                <div className="">
                    <UpGrageNews />
                </div>
                <div className={styles.block_subscription}></div>
            </div>
        </section>  
        </>
    );
}