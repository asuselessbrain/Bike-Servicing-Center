import { Button } from "../ui/button";

const NavBar = () => {
    return (
        <div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <Button>SignIn</Button>
                <Button>SignUp</Button>
            </div>
        </div>
    );
};

export default NavBar;