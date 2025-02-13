import Menu from "@/components/header/menu";
import AuthButtons from "@/components/authentication/authButtons";
import Logo from "@/public/assets/Logo";
import DarkLightSwitcher from "@/components/ui/dark-light-switcher";
import UserInformation from "@/components/header/UserInformation";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header
      className={
        " sticky top-0 py-4 bg-background z-30 border-b border-b-gray-6"
      }
    >
      <div className={"flex items-center justify-between container"}>
        <Logo />

        <div className={"flex items-center gap-x-3 md:gap-x-6"}>
          {session ? <UserInformation /> : <AuthButtons />}
          <Menu />
          <DarkLightSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
