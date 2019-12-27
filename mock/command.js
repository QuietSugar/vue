import Mock from 'mockjs'

const List = []
const count = 100

const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    commandContent: '@title(5, 10)',
    commandDescription: '@first',
    'type|1': ['win', 'linux'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    // 复制次数
    usageCount: '@integer(10, 100)',
    image_uri,
    platforms: ['a-platform']
  }))
}

export default [
  {
    url: '/command/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/command/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const command of List) {
        if (command.id === +id) {
          return {
            code: 20000,
            data: command
          }
        }
      }
    }
  },

  {
    url: '/command/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/command/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

