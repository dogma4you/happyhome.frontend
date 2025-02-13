import Icon from "@/components/ui/icon";

const Stars = ({ count }) => {
  return (
    <div className={"flex items-center gap-x-1"}>
      {new Array(5).fill("").map((_, index) => {
        if (count > index) {
          return (
            <Icon
              key={index}
              name={"star-filled"}
              className={"text-orange-6 text-2xl"}
            />
          );
        } else {
          return (
            <Icon
              key={index}
              name={"star-stroke"}
              className={"text-orange-6 text-2xl"}
            />
          );
        }
      })}
    </div>
  );
};

export default Stars;
