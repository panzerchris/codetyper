import { getNextChange, NextChange } from './get-next-change'
import { moveCursor } from './move-cursor'

export function insertStringAtIndex(
  str: string,
  strToInsert: string,
  index: number
): string {
  return str.slice(0, index) + strToInsert + str.slice(index)
}

export function removeLetterAtIndex(str: string, index: number): string {
  return str.slice(0, index) + str.slice(index + 1)
}

export interface CodeTyperState {
  currentCode: string
  endCode: string
  row: number
  col: number
}
export function codeTyper(codeTyper: CodeTyperState): CodeTyperState {
  const change: NextChange = getNextChange(
    codeTyper.currentCode,
    codeTyper.endCode
  )
  const cursor = { row: codeTyper.row, col: codeTyper.col }
  if (change.type !== 'none') {
    const newCursor = moveCursor(codeTyper.currentCode, cursor, change.index)

    if (!newCursor) {
      if (change.type === 'insert') {
        return {
          ...codeTyper,
          col: codeTyper.col + 1,
          currentCode: insertStringAtIndex(
            codeTyper.currentCode,
            change.chr,
            change.index
          ),
        }
      }
      if (change.type === 'remove') {
        return {
          ...codeTyper,
          currentCode: removeLetterAtIndex(codeTyper.currentCode, change.index),
        }
      }
    } else {
      return { ...codeTyper, ...newCursor }
    }
  }
  return codeTyper
}
