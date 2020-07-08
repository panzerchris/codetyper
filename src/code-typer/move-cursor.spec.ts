import { moveCursor } from './move-cursor'

describe('Name of the group', () => {
  it('should move cursor to destination', () => {
    const startCursor = { row: 0, col: 0 }
    const code = [
      '0123456789012345678901234567890123456789',
      '0123456789012345678901234567890123456789',
      '0123456789012345678901234567890123456789',
      '0123456789012345678901234567890123456789',
      '0123456789012345678901234567890123456789',
      '0123456789012345678901234567890123456789',
    ].join('\n')

    let currentCursor = startCursor
    const endIndex = 41 * 5 + 5

    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 0,
        "row": 1,
      }
    `)
    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 0,
        "row": 2,
      }
    `)
    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 0,
        "row": 3,
      }
    `)
    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 0,
        "row": 4,
      }
    `)
    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 0,
        "row": 5,
      }
    `)
    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 1,
        "row": 5,
      }
    `)
    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 2,
        "row": 5,
      }
    `)
    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 3,
        "row": 5,
      }
    `)

    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 4,
        "row": 5,
      }
    `)
    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot(`
      Object {
        "col": 5,
        "row": 5,
      }
    `)

    currentCursor = moveCursor(code, currentCursor, endIndex)
    expect(currentCursor).toMatchInlineSnapshot('undefined')
  })
})
