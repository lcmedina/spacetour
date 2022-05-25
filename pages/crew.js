import styles from '../styles/Crew.module.css'
import Nav from '../components/nav'

function Crew() {
    return ( 
        <div className={styles.container}>
        <Nav/>
            <h1>Crew</h1>
        </div>
     );
}

export default Crew;