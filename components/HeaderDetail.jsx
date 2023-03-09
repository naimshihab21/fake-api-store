import Link from 'next/link'
import Image from 'next/legacy/image'
import arrowleft from "../public/icons/arrowleft.svg"
import { HeaderDetailProduct } from '../styles/Header.styles.js'

const HeaderDetail = () => {
  return (
    <HeaderDetailProduct>
      <Link href="/" title='Go back to before the page'>
        <Image
          width={24}
          height={24}
          src={arrowleft}
          alt="Arrow left"
          priority
        />
        <h3>Back</h3>
      </Link>
    </HeaderDetailProduct>
  )
}

export default HeaderDetail