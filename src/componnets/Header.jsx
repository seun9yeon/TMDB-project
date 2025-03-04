import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
  <ul>
    <li>
      <Link to = "/">Home으로</Link>
    </li>
    <li>
      <Link to = "/list">movielist로</Link>
    </li>
    {/* 로그인을 한 경우에만 보여주고 싶다
     근데 그냥 보여주는 게 좋을 수도 있음 */}
  </ul>
  )
}
