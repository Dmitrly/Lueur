import Logo from "./Logo";
import PublishButton from "./PublishButton";
import Search from "./Search";
import Notification from "./Notification";
import Avatar from "./Avatar";

export default function Header (){
    return (
        <>
            <header className="w-[80%] m-auto py-10 flex justify-between items-center">
                <div className="flex gap-20 items-center">
                    <Logo />
                    <Search />
                </div>
                <div className="flex gap-10 items-center">
                    <PublishButton />
                    <Notification />
                    <Avatar />
                </div>
            </header>
        </>
    )
}