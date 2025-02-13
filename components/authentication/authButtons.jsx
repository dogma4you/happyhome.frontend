import AuthButton from "@/components/authentication/authButton";

const AuthButtons = () => {
  return (
    <div className={"flex items-center gap-x-[2px] md:gap-x-6"}>
      <AuthButton isLogin={false} title={"Register"} />
      <AuthButton
        isLogin={true}
        title={"Login"}
        variant={"ghost"}
        className={"px-4"}
      />
    </div>
  );
};

export default AuthButtons;
