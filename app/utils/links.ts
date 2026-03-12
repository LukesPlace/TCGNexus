import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Sets',
  icon: 'i-lucide-layers',
  to: '/sets'
}, {
  label: 'Comparisons',
  icon: 'i-lucide-git-compare',
  to: '/comparisons'
}, {
  label: 'Price Movers',
  icon: 'i-lucide-trending-up',
  to: '/price-movers'
}, {
  label: 'Blog',
  icon: 'i-lucide-book-text',
  to: '/blog'
}, {
  label: 'About',
  icon: 'i-lucide-info',
  to: '/about'
}]
