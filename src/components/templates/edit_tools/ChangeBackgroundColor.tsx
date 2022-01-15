/* eslint-disable tailwindcss/no-custom-classname */
import { useRecoilValue } from 'recoil';
// atom
import { currentTargetState } from 'src/states/atoms/tamplate_atoms';
// css
import styles from './ChangeBackgroundColor.module.scss';

import useSWR from 'swr';
import axios from 'axios';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const ChangeBackgroundColor = (props: Props): JSX.Element => {
  const currentTarget = useRecoilValue(currentTargetState);

  // 設定されているエレメントの背景カラーを変える
  const changeBgColer = (e) => {
    e.stopPropagation();
    currentTarget.style.backgroundColor = e.target.value;
  };

  const hiddenBgColor = (e) => {
    e.stopPropagation();
    props.setDisplay('none');
  };

  // カラーデータフェッチして一覧に表示
  const { data, error } = useSWR('/api/colors', fetcher);
  if (error) {
    return <div style={{ display: props.display }}>error</div>;
  }

  if (!data) {
    return <div style={{ display: props.display }}>loading...</div>;
  } else {
    const colorList = data.map((color: Color) => (
      <li
        style={{ backgroundColor: color.colorCode, color: specifiedColorNameColor(color.id) }}
        key={color.id}
        className={styles.tool_list}
      >
        <button value={color.colorCode} onClick={changeBgColer}></button>
        <div className={styles.label}>{color.id}</div>
        {color.name}
        <br />
        {color.kanaName}
      </li>
    ));
    return (
      <div style={{ display: props.display }} className={styles.base} onClick={hiddenBgColor}>
        <ul className={styles.tool_bg}>{colorList}</ul>
      </div>
    );
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

// 背景の明度で文字が見えにくいので文字色を制御
const specifiedColorNameColor = (colorID) => {
  if (colorID >= 228) {
    return '#ffffff';
  } else {
    return '#000000';
  }
};

export default ChangeBackgroundColor;
