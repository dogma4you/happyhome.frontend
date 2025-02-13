import Icon from "@/components/ui/icon";

const homeOwnersInfo = [
  "One Home Inspection",
  "No Buyer Showing",
  "No Agent Fees",
  "No Repairs",
];

const HomeOwners = () => {
  return (
    <ul className={"flex flex-col gap-y-1 md:gap-y-3"}>
      {homeOwnersInfo.map((homeOwnersInfo, index) => {
        return (
          <li
            key={index}
            className={
              "inline-flex items-center gap-x-[18px] text-white text-base md:text-lg font-normal font-poppins"
            }
          >
            <Icon
              name={"check"}
              className={"text-xl md:text-2xl text-orange-6"}
            />
            {homeOwnersInfo}
          </li>
        );
      })}
    </ul>
  );
};

export default HomeOwners;
