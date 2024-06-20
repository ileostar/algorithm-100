import fs from 'node:fs'

/**
 * 获取src下第一层文件夹数量
 */
function getCurrentFileNum(dirPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        reject(err)
      }
      else {
        let dirCount = 0
        for (const file of files) {
          if (file.isDirectory())
            dirCount++
        }
        resolve(dirCount)
      }
    })
  })
}

// 使用示例
export default async function (plop) {
  let number = await getCurrentFileNum('./src')
  if (number < 10)
    number = `00${number + 1}`
  else if (number >= 10 && number < 100)
    number = `0${number + 1}`

  plop.setGenerator('basicAlgo', {
    description: '创建你的基础vue3模板文件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入你要新建的文件名称',
      },
    ],
    actions: [{
      type: 'add',
      path: `src/${number}-{{dashCase name}}/index.ts`,
      templateFile: 'plop-template/index.hbs',
    }, {
      type: 'add',
      path: `src/${number}-{{dashCase name}}/index.spec.ts`,
      templateFile: 'plop-template/index.spec.hbs',
    }, {
      type: 'add',
      path: `src/${number}-{{dashCase name}}/readme.md`,
      templateFile: 'plop-template/readme.hbs',
    }],
  })
};
