import Image from "next/image";
import { Space_Grotesk, Montserrat, Nunito_Sans} from 'next/font/google'

export const space_font = Space_Grotesk({
  subsets: ['latin']
})

export const montserrat_font = Montserrat({
  subsets: ['latin']
})

export const nunito_font = Nunito_Sans({
  subsets: ['latin']
})
export default function Home() {
  return (
    <div className="">
      <main>
      </main>
    </div>
  );
}
