import React from 'react';
import { Flex, Grid, GridItem, Mode } from 'components';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { mode } from 'slice/grobalSlice';
import './List.css';

export default function List() {
  const lightcones = useSelector((state: State) => state.lightconeSlice.lightcones);
  const trans = Object.values(lightcones).map((value, index) => {
    return Object.assign({ id: Object.keys(lightcones)[index] }, value);
  });

  return (
    <Mode id='LightconeList'>
      <Grid card_width={20}>
        <>
          {trans.map((value) => {
            const name = value.이름;
            return (
              <GridItem key={value.id} value={value.id} onClick={(value: string) => {}}>
                <>
                  <Flex vertical>
                    <>
                      <Flex>
                        <>
                          <Flex vertical>
                            <>
                              <div>{name}</div>
                              <div>Lv. {value.레벨}</div>
                              <div>{value.중첩}</div>
                            </>
                          </Flex>
                          <div
                            style={{
                              backgroundColor: 'var(--primary-shade-400)',
                              width: '5rem',
                              height: '5rem',
                              borderRadius: '0.25rem',
                              flexShrink: 0,
                            }}
                          >
                            <img
                              src={process.env.PUBLIC_URL + '/png/lightcone/' + name + '.png'}
                              alt={name}
                              style={{ width: '100%', height: '100%' }}
                            ></img>
                          </div>
                        </>
                      </Flex>
                      <div>착용자</div>
                    </>
                  </Flex>
                </>
              </GridItem>
            );
          })}
          <div
            className='controler'
            onClick={() => {
              dispatch(mode('추가'));
            }}
          >
            <span>+</span>
          </div>
        </>
      </Grid>
    </Mode>
  );
}
