import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Sets',
  icon: 'i-lucide-folder',
  to: '/sets'
}, {
  label: 'Comparisons',
  icon: 'i-lucide-file-text',
  to: '/comparisons'
}, {
  label: 'Price Movers',
  icon: 'i-lucide-mic',
  to: '/price-movers'
}, {
  label: 'Blog',
  icon: 'i-lucide-user',
  to: '/blog'
}, {
  label: 'About',
  icon: 'i-lucide-user',
  to: '/about'
}]
