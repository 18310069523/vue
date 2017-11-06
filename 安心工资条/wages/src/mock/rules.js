export default [
  {
    id: 1,
    text: '管理员',
    data: [
      {
        name: 'AuthorityDistribution',
        text: '权限分配'
      },
      {
        name: 'SalaryClause',
        text: '工资条',
        children: [
          {
            name: 'Administration',
            text: '工资条管理'
          }
        ]
      },
      {
        name: 'BusinessAdmin',
        text: '企业管理',
        children: [
          {
            name: 'Account',
            text: '账户管理'
          },
          {
            name: 'Staff',
            text: '员工管理'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    text: '老板',
    data: [
      {
        name: 'BusinessAdmin',
        text: '企业管理',
        children: [
          {
            name: 'Account',
            text: '账户管理'
          },
          {
            name: 'Staff',
            text: '员工管理'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    text: '财务',
    data: [
      {
        name: 'SalaryClause',
        text: '工资条',
        children: [
          {
            name: 'Administration',
            text: '工资条管理'
          }
        ]
      },
      {
        name: 'BusinessAdmin',
        text: '企业管理',
        children: [
          {
            name: 'Account',
            text: '账户管理'
          },
          {
            name: 'Staff',
            text: '员工管理'
          }
        ]
      }
    ]
  }
]
