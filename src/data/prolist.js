var Mock = require('mockjs')

var data = Mock.mock({
  "list|3":[
    {
      "name":"@cname",
    }
  ]
})

Mock.mock('http://www.baidu.com/pro',data)
