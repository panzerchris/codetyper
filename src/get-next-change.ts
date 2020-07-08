import { diffChars } from 'diff'

function chooseBestLetterToAdd(stringToAdd): string {
  const letterArray = [...stringToAdd]
  const index = letterArray.findIndex((l) => l === ' ')
  return index === -1 ? letterArray[0] : letterArray[index]
}

export type NextChange =
  | {
      type: 'insert' | 'remove'
      index: number
      chr: string
    }
  | { type: 'none' }

export function getNextChange(code: string, newCode: string): NextChange {
  const diff = diffChars(code, newCode)

  let scanIndex = 0
  for (const diffDetails of diff) {
    const { added, removed, value: diffString } = diffDetails
    const noChange = !added && !removed

    if (noChange) {
      scanIndex += diffString.length
    } else {
      if (removed) {
        const removeChrIndex = scanIndex + diffString.length - 1
        return {
          type: 'remove',
          index: removeChrIndex,
          chr: code[removeChrIndex],
        }
      }
      if (added) {
        const characterToAdd = chooseBestLetterToAdd(diffString)
        return {
          type: 'insert',
          index: scanIndex,
          chr: characterToAdd,
        }
      }
    }
  }
  return { type: 'none' }
}
