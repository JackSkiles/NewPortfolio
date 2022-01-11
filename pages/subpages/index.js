import styles from '../../styles/subpages.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { subpages: data }
    }

}

const Subpages = ({ subpages }) => {
    return ( 
        <div>
            <h1>All Ninjas</h1>
            {subpages.map(page => (
                <Link href={'/subpages/' + page.id} key={ page.id }>
                    <a className={styles.single}>
                        <h3>{ page.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Subpages;