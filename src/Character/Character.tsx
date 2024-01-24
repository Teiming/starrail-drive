import React, { ReactElement, useState } from 'react';
import Backup from 'Backup';
import Empty from 'Empty';
import CharacterList from './CharacterList';
import CharacterNew from './CharacterNew';
import CharacterDetail from './Detail/CharacterDetail';
import { useSelector } from 'react-redux';
import store, { State } from 'store';
import { EveryCharacterWithTrailblazer } from 'types/character';
import './Character.css';

export default function Character() {
  const [selectedCharacter, setSelectedCharacter] =
    useState<EveryCharacterWithTrailblazer>('개척자');
  const subMode = useSelector((state: State) => state.modeSlice.subMode);
  const already = useSelector((state: State) => state.characterSlice);
  localStorage.setItem('캐릭터', JSON.stringify(store.getState().characterSlice));

  let innerCharacter: ReactElement = <></>;
  let emptyLine: 1 | 2 = 1;
  switch (subMode) {
    case '상세':
      innerCharacter = <CharacterDetail name={selectedCharacter} />;
      break;
    case '추가':
      innerCharacter = <CharacterNew already={Object.keys(already)} />;
      break;
    default:
      emptyLine = 2;
      innerCharacter = (
        <CharacterList
          onDetail={(name: EveryCharacterWithTrailblazer) => {
            setSelectedCharacter(name);
          }}
        />
      );
      break;
  }
  return (
    <main id='Character'>
      {innerCharacter}
      <Backup />
      <Empty line={emptyLine} />
    </main>
  );
}
