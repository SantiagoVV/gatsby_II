import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding: `var(--space-4) var(--size-gutter)`,
      backgroundColor:`#2596be`
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {"Home"}
    </Link>
  </header>
)

export default Header
