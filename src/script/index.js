import {
  get_awesome_readme,
  resource_list,
} from './lib/get_awesome_from_github.js'
import { generate_data } from './lib/generate_helpers_data.js'

function write_json() {
  generate_data()
  Object.keys(resource_list).forEach((key) => {
    get_awesome_readme(key)
  })
}

write_json()

// get_awesome_readme('awesome-go')
