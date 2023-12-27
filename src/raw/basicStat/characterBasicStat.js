const compressed = {
  계네빈: [
    [
      [120, 79, 60],
      [234, 154, 117],
    ],
    [
      [282, 186, 141],
      [342, 225, 171],
    ],
    [
      [390, 257, 195],
      [450, 297, 225],
    ],
    [
      [498, 328, 249],
      [558, 368, 279],
    ],
    [
      [606, 399, 303],
      [666, 439, 333],
    ],
    [
      [714, 471, 357],
      [774, 510, 387],
    ],
    [
      [822, 542, 411],
      [882, 582, 441],
    ],
  ],
};
var expanded = {};

const level = [
  [1, 20],
  [20, 30],
  [30, 40],
  [40, 50],
  [50, 60],
  [60, 70],
  [70, 80],
];

let 계네빈 = {};
for (let i in compressed["계네빈"]) {
  const lowLevel = level[i][0];
  const highLevel = level[i][1];
  const levelGap = highLevel - lowLevel;
  console.log("승급", i, "단계", lowLevel, "~", highLevel);

  const low = [
    compressed["계네빈"][i][0][0],
    compressed["계네빈"][i][0][1],
    compressed["계네빈"][i][0][2],
  ];
  const high = [
    compressed["계네빈"][i][1][0],
    compressed["계네빈"][i][1][1],
    compressed["계네빈"][i][1][2],
  ];

  const zeroHp = (highLevel * low[0] - lowLevel * high[0]) / levelGap;
  const zeroAtk = (highLevel * low[1] - lowLevel * high[1]) / levelGap;
  const zeroDef = (highLevel * low[2] - lowLevel * high[2]) / levelGap;

  const diffHp = (high[0] - low[0]) / levelGap;
  const diffAtk = (high[1] - low[1]) / levelGap;
  const diffDef = (high[2] - low[2]) / levelGap;

  let nowAscend = {};
  for (let level = lowLevel; level <= highLevel; level++) {
    const nowHp = zeroHp + level * diffHp;
    const nowAtk = zeroAtk + level * diffAtk;
    const nowDef = zeroDef + level * diffDef;
    nowAscend[level] = { hp: nowHp, atk: nowAtk, def: nowDef };
  }
  계네빈[i] = nowAscend;
}
expanded["계네빈"] = 계네빈;
console.log("Final Result: ", expanded);

console.log(expanded["계네빈"]);
