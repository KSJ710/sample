import Link from 'next/link';
import styles from './Head.module.scss';

export default function Head(): JSX.Element {
  return (
    <div className={styles.base}>
      <nav className="flex justify-center space-x-4">
        <Link href="/dashboard">
          <a className={styles.nav_btn}>Home</a>
        </Link>
        <Link href="/team">
          <a className={styles.nav_btn}>team</a>
        </Link>
        <Link href="/projects">
          <a className={styles.nav_btn}>projects</a>
        </Link>
        <Link href="/reports">
          <a className={styles.nav_btn}>reports</a>
        </Link>
      </nav>
    </div>
  );
}
