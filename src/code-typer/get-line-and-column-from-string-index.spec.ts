import { getLineAndColumnFromStringIndex } from './get-line-and-column-from-string-index'

describe('getLineAndColumnFromStringIndex', () => {
  it('should word with an empty string and index 0', () => {
    const testString = ''

    expect(getLineAndColumnFromStringIndex(testString, 0))
      .toMatchInlineSnapshot(`
      Object {
        "col": 0,
        "row": 0,
      }
    `)
  })
  it('should word with a real world string', () => {
    const testString = 'if\nthis\n'

    expect(
      [0, 1, 2, 3, 4, 5, 6, 7].map((a) =>
        getLineAndColumnFromStringIndex(testString, a)
      )
    ).toMatchInlineSnapshot(`
    Array [
      Object {
        "col": 0,
        "row": 0,
      },
      Object {
        "col": 1,
        "row": 0,
      },
      Object {
        "col": 2,
        "row": 0,
      },
      Object {
        "col": 0,
        "row": 1,
      },
      Object {
        "col": 1,
        "row": 1,
      },
      Object {
        "col": 2,
        "row": 1,
      },
      Object {
        "col": 3,
        "row": 1,
      },
      Object {
        "col": 4,
        "row": 1,
      },
    ]
  `)
  })
})
