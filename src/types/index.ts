export interface NavItem {
  title: string
  href: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export interface Item {
  title: string
  description: string | string[]
  image: string
  label?: string
}

export type ItemWithOptionalContent = Pick<Item, 'title' | 'label'> & Partial<Pick<Item, 'description' | 'image'>>

export interface Article extends ItemWithOptionalContent {
  items: string[]
}

export interface Section extends ItemWithOptionalContent {
  items: Item[]
}

export interface Subcategory extends Item {
  slug?: string
  items?: Item[]
}

export interface Category extends ItemWithOptionalContent {
  items: Subcategory[]
}

export interface Limits {
  min: number
  max: number
}
