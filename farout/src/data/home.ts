import Image1 from '../../public/homepage/img1.jpeg'
import Image2 from '../../public/homepage/img2.jpeg'
import Image3 from '../../public/homepage/img3.jpeg'
import Image4 from '../../public/homepage/img4.jpeg'

interface CardI {
    id: string
    name: string
    image: any
    href: string
}

export const homeCards: CardI[] = [
    {
        id: '0',
        name: "WOMENSWEAR",
        image: Image1,
        href: "/shopping/women"
    },
    {
        id: '1',
        name: "MENSWEAR",
        image: Image2,
        href: "/shopping/men"
    },
    {
        id: '2',
        name: "BEAUTY",
        image: Image3,
        href: "/shopping/beauty"
    },
    {
        id: '3',
        name: "KIDSWEAR",
        image: Image4,
        href: "/shopping/kids"
    },
]