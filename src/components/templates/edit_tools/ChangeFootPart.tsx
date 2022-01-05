/* eslint-disable tailwindcss/no-custom-classname */
import { useSetRecoilState } from 'recoil';
import { tplFootNumberState } from 'src/states/atoms/tamplate_atoms';
import useSWR from 'swr';
import axios from 'axios';
import styles from './ChangeFootPart.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const ChangefootPart = (props: Props): JSX.Element => {
  const setFootNum = useSetRecoilState(tplFootNumberState);

  //Head部分のパーツを切り替える
  const changeFootPart = (e) => {
    e.stopPropagation();
    setFootNum(e.target.value);
  };

  //背景カラーエディタを非表示にする
  const hiddenfootPart = () => {
    props.setDisplay('none');
  };

  const { data, error } = useSWR('/api/foot_parts', fetcher);
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  } else {
    const footPartList = data.map((footPart: LayoutParts) => (
      <li key={footPart.id} className={styles.tool_list}>
        <button value={footPart.id} onClick={changeFootPart}></button>
        <div className={styles.label}>{footPart.id}</div>
        {footPart.name}
      </li>
    ));
    return (
      <div style={{ display: props.display }} className={styles.base} onClick={hiddenfootPart}>
        <ul className={styles.tool_bg}>{footPartList}</ul>
      </div>
    );
  }
};

// useSWRが受け取る関数でapiルートURLが渡される
const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default ChangefootPart;
