import { codeTyper } from './code-typer'

describe('Name of the group', () => {
  it('should return the original string if no code changes are there', () => {
    expect(
      codeTyper(
        'if (hello === 5) console.log("hello")',
        'if (hello === 5) console.log("hello")'
      )
    ).toEqual('if (hello === 5) console.log("hello")')
  })
})
