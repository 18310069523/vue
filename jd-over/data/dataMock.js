import Mock from "mockjs"

var Random = Mock.Random
export default {
    dataMock: Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            img: Random.dataImage('200x100', 'Hello Mock.js!')
        }],
    }),
    dataPC: function() {
        var list = []
        for (var i = 0; i < 40; i++) {
            list.push({ id: i, name: Mock.Random.cname() })
        }
        return list
    },
    dataCollect: Mock.mock({
        'personalC|20-50': [{
            "id|+1": 1,
            'collect|1-5': [{
                name: Random.cname(),
                age: Random.integer(15, 50),
                address: Random.county(true)
            }]
        }]
    })
}