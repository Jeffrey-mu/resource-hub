import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'

export default function JBreadcrumbs() {
  return (
    <Breadcrumbs className="m-2">
      <BreadcrumbItem>
        <NavLink to="/">/</NavLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}
