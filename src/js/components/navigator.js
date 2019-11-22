import React from "react"
import { Link } from "gatsby"

const pages = [
  { title: "Home", path: "/" },
  { title: "Profile", path: "/profile" },
  { title: "News", path: "/news" },
  { title: "Works", path: "/works" },
  { title: "Seminar", path: "/seminar" },
]

const Navigator = () =>
  <div className="block">
    {
      pages.map(p =>
        <Link
          className="main"
          to={p.path}
          key={p.title}
        >
          {p.title}
        </Link>
      )
    }
  </div>

export default Navigator
