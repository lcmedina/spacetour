import styles from '../styles/Destination.module.css'
import Nav from '../components/nav'

function Destination () {
    return ( 
        <div className={styles.container}>
        <Nav/>
            <h1>Destinations</h1>
        </div>
     );
}

export default Destination ;