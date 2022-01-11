import Link from 'next/link'
import Image
 from 'next/image';
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/kAe5fg9.jpeg" width={128} height={77}></Image>
                <h1>Ninja List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <br/>
            <Link href="/about"><a>About</a></Link>
            <br/>
            <Link href="/subpages"><a>Sub Pages</a></Link>
        </nav>
     );
}
 
export default Navbar;