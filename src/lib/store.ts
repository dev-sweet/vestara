import { create } from 'zustand'

export type PageName = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'product-category'
  | 'services' 
  | 'how-we-work' 
  | 'quality' 
  | 'faq' 
  | 'contact'

interface NavigationStore {
  currentPage: PageName
  categorySlug: string | null
  navigate: (page: PageName, slug?: string) => void
  isMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export const useNavigation = create<NavigationStore>((set) => ({
  currentPage: 'home',
  categorySlug: null,
  navigate: (page, slug) => {
    set({ 
      currentPage: page, 
      categorySlug: slug || null,
      isMenuOpen: false 
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
}))
