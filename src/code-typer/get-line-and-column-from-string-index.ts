import { CursorInfo } from "./cursor-info";

function getLastElement(array) {
  return array[array.length - 1];
}

export function getLineAndColumnFromStringIndex(
  code: string,
  index: number
): CursorInfo {
  const linesBeforeIndex = code.slice(0, index).split("\n");
  return {
    row: linesBeforeIndex.length - 1,
    col: getLastElement(linesBeforeIndex).length,
  };
}
