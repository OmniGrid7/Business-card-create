import reactLogo from '../assets/react.svg'
export default function Header() {
    return( 
         <header>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <span>React</span>
            </header>
    )
}