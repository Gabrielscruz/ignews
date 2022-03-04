import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'

export function SignInButton(){
    const isUsersLoggedIn = true
    return isUsersLoggedIn ? (
        <button className={styles.signInButton} type='button'>
            <FaGithub color={isUsersLoggedIn? "green" : "#04d361"} />
            Gabriel Silva
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
        ):(
            <button className={styles.signInButton} type='button'>
                <FaGithub color={isUsersLoggedIn? "green" : "#eba417"} />
                Sign in with Github
            </button>  
        )
    
}