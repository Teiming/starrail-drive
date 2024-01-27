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

  const takeStat = (coeffStat: 4.8 | 2.4 | 3.0) => {
    return (coeffLightcone: number) => {
      return (lv: number) =>
        (coeffLightcone *
          (coeffStat * 10) *
          ((100 +
            Math.max(0, Math.min(Math.floor(lv / 10) - 1, 1)) * 120 +
            Math.max(0, Math.min(Math.floor(lv / 10) - 2, 5)) * 160 +
            (lv - 1) * 15) /
            10)) /
        100;
    };
  };

  const takeHP = takeStat(4.8);
  const takeATK = takeStat(2.4);
  const takeDEF = takeStat(3.0);

  return (
    <Mode id='LightconeList'>
      <Grid card_width={20}>
        <>
          {trans.map((value) => {
            const name = value.이름;
            const lv = value.레벨;
            const coeffStat = [10, 9, 6];
            const getHP = takeHP(coeffStat[0]);
            const getATK = takeATK(coeffStat[1]);
            const getDEF = takeDEF(coeffStat[2]);
            const sup = (x: number) => {
              switch (x) {
                case 1:
                  return 'I';
                case 2:
                  return 'II';
                case 3:
                  return 'III';
                case 4:
                  return 'IV';
                case 5:
                  return 'V';
                default:
                  break;
              }
            };
            return (
              <GridItem key={value.id} value={value.id} onClick={(value: string) => {}}>
                <>
                  <Flex vertical s={{ gap: '0.5rem' }}>
                    <>
                      <Flex>
                        <>
                          <Flex vertical s={{ padding: '0.25rem' }}>
                            <>
                              <div>{name}</div>
                              <div>Lv. {value.레벨}</div>
                              <div>착용자</div>
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
                            <div
                              style={{
                                position: 'relative',
                                bottom: '2.25rem',
                                left: '3rem',
                                padding: '0.25rem',
                                margin: '0.25rem',
                                backgroundColor: 'color(display-p3 0.8 0.6 0.4)',
                                width: '1.5rem',
                                height: '1.5rem',
                                textAlign: 'center',
                                borderRadius: '1.5rem',
                              }}
                            >
                              {sup(value.중첩)}
                            </div>
                          </div>
                        </>
                      </Flex>
                      <Flex s={{ gap: '0.5rem' }}>
                        <>
                          {['HP', '공격력', '방어력'].map((value) => {
                            const getStat = (x: string) => {
                              switch (x) {
                                case 'HP':
                                  return getHP(lv);
                                case '공격력':
                                  return getATK(lv);
                                default:
                                  return getDEF(lv);
                              }
                            };
                            return (
                              <Flex
                                s={{
                                  fontSize: '0.8rem',
                                  padding: '0.25rem',
                                  paddingTop: '0.3rem',
                                  borderRadius: '0.25rem',
                                  backgroundColor: 'white',
                                  color: 'var(--primary)',
                                }}
                              >
                                <>
                                  <div>{value}</div>
                                  <div>{getStat(value)}</div>
                                </>
                              </Flex>
                            );
                          })}
                        </>
                      </Flex>
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
