import WujieReact from 'wujie-react'
import { useRef, useEffect } from 'react'

import './App.css'

function App() {
  // App在本地开发时会被执行多次
  // 导致 appWindow.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ 被重复执行
  // 进而导致 react-devtools 中同一个子应用出现多次
  const times = useRef(0)
  const isInita = useRef(0)
  const isInitb = useRef(0)

  useEffect(() => {
    times.current += 1
  }, [])
  
  return (
    <div className="App">
       <WujieReact
        width="100%"
        height="100%"
        name="project1"
        url="//localhost:8081/"
        plugins={
          [{ 
            jsBeforeLoaders: [{ 
              content: 'window.React = window.parent.React' 
            }, {
              content: 'window.ReactDOM = window.parent.ReactDOM' 
            }, {
              callback(appWindow) {
                isInita.current += 1

                if (isInita.current === times.current) {
                  appWindow.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__
                }
              }
            }]
          }]
        }
      ></WujieReact>
      <WujieReact
        width="100%"
        height="100%"
        name="project2"
        url="//localhost:8082/"
        plugins={
          [
            {
              jsBeforeLoaders: [{
                callback(appWindow) {
                  isInitb.current += 1
  
                  if (isInitb.current === times.current) {
                    appWindow.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__
                  }
                }
              }]
            }
          ]
        }
      ></WujieReact>
    </div>
  )
}

export default App
