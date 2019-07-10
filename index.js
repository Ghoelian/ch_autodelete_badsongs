const isValid = require('is-valid-path')
const rimraf = require('rimraf')
const fs = require('fs')
const args = process.argv.slice(2)
const arg = args[0]

if (isValid(arg)) {
  fs.readFile(arg, 'utf8', (err, data) => {
    if (err) throw err

    const paths = data.split('\n')

    for (let i = 0; i < paths.length; i++) {
      if (paths[i] !== '\r' && !paths[i].includes('These folders')) {
        rimraf(paths[i], (err) => {
          if (err) {
            console.log(err)
          }

          console.log('Removed folder: ' + paths[i])
        })
      }
    }
  })
}
