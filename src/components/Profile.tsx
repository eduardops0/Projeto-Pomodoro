import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://yt3.ggpht.com/yti/ANoDKi7styVuTHmhbL_amYfFnCkmBVhkKH2svls9G7iYhQ=s108-c-k-c0x00ffffff-no-rj" alt="Avatar" />
            <div>
                <strong>Eduardo Pereira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}