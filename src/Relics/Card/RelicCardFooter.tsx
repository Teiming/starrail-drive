import React from 'react';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { mode } from 'slice/grobalSlice';
import './RelicCardFooter.css';

interface Props {
  equip: string;
  onChangeEquip(key: string): void;
  select: () => void;
  onDelete(): void;
}

export default function RelicCardFooter(props: Props) {
  const character = useSelector((state: State) => state.characterSlice);
  const characterList = Object.keys(character);
  let thumbnail = process.env.PUBLIC_URL + '/unavailable-dark.svg';
  const equip = props.equip;
  if (equip !== '미장착') {
    thumbnail = process.env.PUBLIC_URL + '/png/character/' + equip + '.png';
  }
  let innerOption = [
    <option key='미장착' value='미장착'>
      미장착
    </option>,
  ];
  for (const name of characterList) {
    innerOption.push(
      <option key={name} value={name}>
        {name}
      </option>
    );
  }
  return (
    <section className='RelicCardFooter'>
      <div className='RelicEquip'>
        <div className='RelicEquipThumbnail'>
          <div>
            <img src={thumbnail} alt='thumbnail' />
          </div>
        </div>
        <select
          className='RelicEquipSelect'
          name='equip'
          defaultValue={props.equip}
          onChange={(e) => {
            props.onChangeEquip(e.target.value);
          }}
        >
          {innerOption}
        </select>
      </div>
      <div className='RelicControl'>
        <input
          type='button'
          value='수정'
          className='RelicEdit'
          onClick={() => {
            props.select();
            dispatch(mode('수정'));
          }}
        ></input>
        <input
          type='button'
          value='삭제'
          className='RelicDelete'
          onClick={() => {
            if (window.confirm('정말 삭제하시겠습니까?')) {
              props.onDelete();
            }
          }}
        ></input>
      </div>
    </section>
  );
}
