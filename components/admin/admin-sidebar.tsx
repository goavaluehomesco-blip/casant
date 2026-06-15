'use client'

import Link from 'next/link'

export function AdminSidebar() {
  const menuItems = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Contacts', href: '/admin/contacts' },
    { label: 'Gallery', href: '/admin/gallery' },
    { label: 'Hero', href: '/admin/hero' },
    { label: 'Services', href: '/admin/services' },
    { label: 'Team', href: '/admin/team' },
    { label: 'Testimonials', href: '/admin/testimonials' },
    { label: 'Inventory', href: '/admin/inventory' },
  ]

  return (
    <aside className="w-64 bg-gray-900 text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8">Admin</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-blue-400">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
