import request from 'superagent'
import { PeopleModel } from '../Models/people'

export async function getLuke(): Promise<PeopleModel> {
  const response = await request.get('https://swapi.dev/api/people/1')
  console.log(response)
  return response.body
}

export async function getVader(): Promise<PeopleModel> {
  const response = await request.get('https://swapi.dev/api/people/4')
  console.log(response)
  return response.body
}

export async function getObi(): Promise<PeopleModel> {
  const response = await request.get('https://swapi.dev/api/people/10')
  console.log(response)
  return response.body
}

export async function getYoda(): Promise<PeopleModel> {
  const response = await request.get('https://swapi.dev/api/people/20')
  console.log(response)
  return response.body
}