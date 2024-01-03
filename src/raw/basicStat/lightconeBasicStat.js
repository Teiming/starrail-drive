const compressed = {
  "댄스! 댄스! 댄스!": [
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [743, 464, 348],
    ],
    [
      [887, 394, 369],
      [952, 423, 396],
    ],
  ],
};

let expanded = {};

const level = [
  [1, 20],
  [20, 30],
  [30, 40],
  [40, 50],
  [50, 60],
  [60, 70],
  [70, 80],
];

for (const key in compressed) {
  expanded[key] = {};
  for (let i in compressed[key]) {
    const lowLevel = level[i][0];
    const highLevel = level[i][1];
    const levelGap = highLevel - lowLevel;

    const low = [
      compressed[key][i][0][0],
      compressed[key][i][0][1],
      compressed[key][i][0][2],
    ];
    const high = [
      compressed[key][i][1][0],
      compressed[key][i][1][1],
      compressed[key][i][1][2],
    ];
    const zero = [
      (highLevel * low[0] - lowLevel * high[0]) / levelGap,
      (highLevel * low[1] - lowLevel * high[1]) / levelGap,
      (highLevel * low[2] - lowLevel * high[2]) / levelGap,
    ];
    const diff = [
      (high[0] - low[0]) / levelGap,
      (high[1] - low[1]) / levelGap,
      (high[2] - low[2]) / levelGap,
    ];

    let ascension = {};
    for (let level = lowLevel; level <= highLevel; level++) {
      const nowHp = zero[0] + level * diff[0];
      const nowAtk = zero[1] + level * diff[1];
      const nowDef = zero[2] + level * diff[2];
      ascension[level] = { hp: nowHp, atk: nowAtk, def: nowDef };
    }
    expanded[key][i] = ascension;
  }
}

// console.log(JSON.stringify(expanded));

console.log("이름,승급,레벨,hp,atk,def");
for (const name in expanded) {
  for (const asc in expanded[name]) {
    for (const level in expanded[name][asc])
      console.log(
        name +
          "," +
          asc +
          "," +
          level +
          "," +
          expanded[name][asc][level]["hp"] +
          "," +
          expanded[name][asc][level]["atk"] +
          "," +
          expanded[name][asc][level]["def"]
      );
  }
}
