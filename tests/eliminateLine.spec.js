import { getFullLines, eliminateLine } from "../src/game/eliminateLine";
describe("eliminateLine", () => {
  it("从地图里面获取铺满的行", () => {
    const map = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1],
    ];

    expect(getFullLines(map)).toEqual([3, 4]);
  });

  it("最后一行满了，需要消除", () => {
    const map = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [-1, 0, -1, 0, 0],
      [-1, -1, -1, -1, -1],
    ];

    eliminateLine(map);

    expect(map).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [-1, 0, -1, 0, 0],
    ]);
  });

  it("最后两行满了，需要消除", () => {
    const map = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [-1, 0, -1, 0, 0],
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1],
    ];

    eliminateLine(map);

    expect(map).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [-1, 0, -1, 0, 0],
    ]);
  });
});