import {gql} from '@apollo/client'

const GET_POKEMON = gql`
query pokemon($id: String, $name: String) {
  pokemon(id: $id, name: $name) {
    id
    name
    attacks {
      fast {
        name
      }
      special {
        name
      }
    }
    evolutions {
      id
      name
      image
      evolutionRequirements {
        amount
        name
      }
    }
    image
  }
}
`

export default GET_POKEMON