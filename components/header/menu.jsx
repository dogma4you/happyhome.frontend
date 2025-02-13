import { auth } from "@/auth";
import MenuContent from "@/components/header/MenuContent";

const Menu = async () => {
  const session = await auth();
  return <MenuContent isLoggedIn={session} />;
};

export default Menu;
