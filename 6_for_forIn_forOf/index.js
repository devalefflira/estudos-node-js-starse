import { getPeople } from './starWarsService.js';

async function main() {
  const starWarsPeople = await getPeople(1);
  // for (let i = 0; i < starWarsPeople.length; i++) {
  //   console.log(starWarsPeople[i].name);
  // }
  // for (let proPerson in starWarsPeople[0]) {
  //   console.log(starWarsPeople[0][proPerson]);
  // }
  for (let person of starWarsPeople) {
    console.log(person.name);
  }
}

main();
