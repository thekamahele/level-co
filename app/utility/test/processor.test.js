import expect from 'expect'
import * as processor from '../processor'

describe('centocentsToDollars', () => {

  it('should convert centocents into dollar amount', () => {
    let expected = 34.12
    let actual = processor.centocentsToDollars(341200)
    expect(actual).toEqual(expected)
  })

  it('should return a number', () => {
    let actual = processor.centocentsToDollars(341200)
    expect(actual).toBeA('number')
  })

})

