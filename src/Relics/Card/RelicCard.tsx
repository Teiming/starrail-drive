import React from 'react';
import RelicCardHeader from './RelicCardHeader';
import RelicCardBody from './RelicCardBody';
import RelicCardFooter from './RelicCardFooter';
import Relics from 'types/relics';
import { EveryCharacterWithTrailblazer } from 'types/character';
import './RelicCard.css';

interface Props {
  isSelected: true | false;
  relicDB: Relics;
  equip: (name: '미장착' | EveryCharacterWithTrailblazer) => void;
  select: () => void;
  onDelete: () => void;
}

export default function RelicCard(props: Props) {
  let relicDB = props.relicDB;
  if (props.isSelected) {
    return (
      <div
        className='RelicCard'
        // data-set={this.props.set}
        // data-slot={this.props.slot}
        // data-main-option={this.props.main}
      >
        <RelicCardHeader set={relicDB.세트} slot={relicDB.부위} level={relicDB.레벨} />
        <RelicCardBody level={relicDB['레벨']} main={relicDB['주옵션']} sub={relicDB['부옵션']} />
        <RelicCardFooter
          equip={relicDB.장착}
          select={() => {
            props.select();
          }}
          onDelete={() => {
            props.onDelete();
          }}
          onChangeEquip={(equip: '미장착' | EveryCharacterWithTrailblazer) => {
            props.equip(equip);
          }}
        />
      </div>
    );
  } else {
    return <></>;
  }
}
