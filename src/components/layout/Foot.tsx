/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react';
// イメージ
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Foot.module.scss';

export default function Foot(): JSX.Element {
  return <nav className={styles.base}></nav>;
}
