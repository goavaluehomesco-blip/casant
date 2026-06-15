'use client'

import { Navigation } from './navigation'

export function NavigationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
