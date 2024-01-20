import React from 'react';
import RelicCardHeader from './RelicCardHeader';
import RelicCardBody from './RelicCardBody';
import RelicCardFooter from './RelicCardFooter';
import Relic from 'types/relic';
import './RelicCard.css';

interface Props {
  isSelected: true | false;
  relicDB: Relic;
  onEquip(name: string): void;
  onDelete(): void;
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
        {/* <hr /> */}
        <RelicCardBody level={relicDB['레벨']} main={relicDB['주옵션']} sub={relicDB['부옵션']} />
        <RelicCardFooter
          equip={relicDB.착용}
          onDelete={() => {
            props.onDelete();
          }}
          onChangeEquip={(newEquip: string) => {
            props.onEquip(newEquip);
          }}
        />
      </div>
    );
  } else {
    return <></>;
  }
}
