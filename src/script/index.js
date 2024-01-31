import fs from 'fs';


function generate_data() {
  let file_list = fs.readdirSync('../helpers').filter(item => item.endsWith('.json'))
  const data = file_list.map(item => {
    return {
      name: item,
      data: JSON.parse(fs.readFileSync('../helpers/' + item, 'utf8').toString())
    }
  })
  fs.writeFileSync('../../public/data.json', JSON.stringify(data))

}


generate_data()
