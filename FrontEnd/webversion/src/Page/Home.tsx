import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import styles from '../Styles/style.module.css'
import { Products } from '../components/Products/Products.tsx';
import { UpGrageNews } from '../components/news_company/update_product.tsx';

const queryClient = new QueryClient();
export function HomePage() {
    return (
        <>
        <section className={styles.section_one}>
            <div className={styles.cards}>
                <QueryClientProvider client={queryClient}>
                    <div className="grid grid-rows-1 grid-cols-3 gap-9">
                        <Products />
                    </div>
                </QueryClientProvider>
                <div className="">
                    <UpGrageNews />
                </div>
                <div className={styles.block_subscription}></div>
            </div>
        </section>  
        </>
    );
}