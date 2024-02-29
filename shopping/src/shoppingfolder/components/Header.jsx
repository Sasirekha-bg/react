export default function Header(){
    return (
        <div className="headerSection">
            <div className="left">Shopping mall</div>
            <div className="center">
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Children</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className="search">
                <input type="text"  placeholder="Search..."/>
            </div>
            <div className="right">
                <div className="sign">
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
                <button>Contact</button>
            </div>
        </div>
    )
}