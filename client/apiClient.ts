import request from 'superagent'
import { PeopleModel } from '../Models/people'

export function getGreeting(): Promise<string> {
  return request.get('/api/v1/greeting').then((res) => res.body.greeting)
}

export async function getPeople(): Promise<PeopleModel> {
  const response = await request.get('https://swapi.dev/api/people/1')
  console.log(response)
  return response.body
}

// export async function getStarships(): Promise<any> {
//   const shipResponse = await request.get('https://swapi.dev/api/starships')
//   return shipResponse.body
// }
