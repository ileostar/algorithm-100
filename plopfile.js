export default function (plop) {
  plop.setGenerator('basicAlgo', {
    description: '创建你的基础vue3模板文件',
    prompts: [
      {
        type: 'input',
        name: 'number',
        message: '请输入你算法序号',
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入你要新建的文件名称',
      }
    ],
    actions: [{
      type: 'add',
      path: 'src/{{number}}-{{dashCase name}}/index.ts',
      templateFile: 'plop-template/index.hbs',
    },{
      type: 'add',
      path: 'src/{{number}}-{{dashCase name}}/index.spec.ts',
      templateFile: 'plop-template/index.spec.hbs',
    },{
      type: 'add',
      path: 'src/{{number}}-{{dashCase name}}/readme.md',
      templateFile: 'plop-template/readme.hbs',
    }],
  })
};
