import { RequiredFieldError } from '@/validation/errors'
import { RequiredFiledValidation } from './required-filed-validation'

describe('RequiredFiledValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFiledValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
