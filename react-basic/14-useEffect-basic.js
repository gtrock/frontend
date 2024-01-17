// 使用 useEffect 的步骤如下：

// 在函数组件中调用 useEffect，并传入一个回调函数作为 effect。这个回调函数将会在组件渲染完成后执行。
// 可选地，传入一个依赖项数组作为第二个参数。依赖项数组表示什么情况下需要重新运行 effect。如果不传入依赖项数组，则 effect 每次组件重新渲染时都会执行；如果传入一个空数组 []，则 effect 只会在组件挂载和卸载时执行；如果传入依赖项数组，effect 将会在依赖项发生变化时执行。

import { useEffect, useState } from "react"

const URL = 'http://localhost:7300/mock/659095d96cc19439b72d0fd8/channels'
//useEffect(effect, dependencies)

function App () {
  // 创建一个状态数据
  const [list, setList] = useState([])
  useEffect(() => {
    // 额外的操作 获取频道列表
    async function getList () {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  return (
    <div>
      this is app
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
