import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
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