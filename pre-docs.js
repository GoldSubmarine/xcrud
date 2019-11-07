const fs = require('fs')
const root = './docs/.vuepress/components'

fs.rmdirSync(`${root}/txt`, { recursive: true })
fs.mkdirSync(`${root}/txt`)

fs.readdirSync(`${root}/demo`).forEach(item => {
  const fileName = item.replace(/vue$/, 'txt')
  fs.writeFileSync(`${root}/txt/${fileName}`, fs.readFileSync(`${root}/demo/${item}`))
})
