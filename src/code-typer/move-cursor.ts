import { getLineAndColumnFromStringIndex } from './get-line-and-column-from-string-index'
import { CursorInfo } from './cursor-info'

function normalisedDifference(srcNumber, destNumber) {
  return destNumber - srcNumber > 0 ? 1 : -1
}

export function moveCursor(
  code: string,
  { row, col }: CursorInfo,
  destIndex: number
): CursorInfo | undefined {
  const { row: destRow, col: destCol } = getLineAndColumnFromStringIndex(
    code,
    destIndex
  )

  if (destRow !== row) {
    return { row: row + normalisedDifference(row, destRow), col: col }
  }
  if (destCol !== col) {
    return { row: row, col: col + normalisedDifference(col, destCol) }
  }
  return undefined
}
