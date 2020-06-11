import { RequiredFieldError } from '@/validation/errors'
import { RequiredFiledValidation } from './required-filed-validation'
import faker from 'faker'

describe('RequiredFiledValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFiledValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const sut = new RequiredFiledValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
