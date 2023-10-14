//オブジェクト内のプロパティの値が変更不可能
export const Disc = {
  Empty: 0,
  Dark: 1,
  Light: 2,
} as const;

//列挙型のプロパティ名を表す。
export type Disc = (typeof Disc)[keyof typeof Disc];

export function toDisc(value: number): Disc {
  return value as Disc;
}
