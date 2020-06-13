import { RequiredFieldError } from '@/validation/errors'
import { RequiredFiledValidation } from './required-filed-validation'
import faker from 'faker'

const makeSut = (): RequiredFiledValidation => new RequiredFiledValidation(faker.database.column())

describe('RequiredFiledValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
