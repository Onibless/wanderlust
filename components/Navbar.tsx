 import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link className="nav-link active" href="/login">
        <Image src="/wanderlust.jpg" alt="logo" width={300} height={60} />
      </Link>

      {<ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className=" nav-link active regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>

        ))}
      </ul> }

      <div className="lg:flexCenter hidden">
        <Link className="nav-link active" href="/login">
            <Button 
              type="button"
              title="login"
              icon="/user.svg"
              variant="btn_dark_green"
             />
          </Link>
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block nav-link active cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar