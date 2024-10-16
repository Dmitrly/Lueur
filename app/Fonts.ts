import { Space_Grotesk, Montserrat, Nunito_Sans} from 'next/font/google'

export const space_font = Space_Grotesk({
  subsets: ['latin'],
  display: 'fallback'
})

export const montserrat_font = Montserrat({
  subsets: ['latin'],
  display: 'fallback'
})

export const nunito_font = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap'
})