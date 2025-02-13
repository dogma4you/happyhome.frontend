import favoriteUnselected from "@/public/assets/icons/favoriteUnselect.svg";
import favoriteSelected from "@/public/assets/icons/favoriteSelected.svg";
import Image from "next/image";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

const FavoriteIcon = ({ isSelected, id, mutate }) => {
  const toggleFavorite = async (e) => {
    try {
      e.stopPropagation();
      let response;
      if (isSelected) {
        response = await axios.delete(`/saved_lists/${id}`);
      } else {
        response = await axios.put(`/saved_lists/${id}`);
      }

      if (response.data.status === 400) {
        toast.error(response.data.message);
      }

      await mutate();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={"absolute top-4 right-4 z-10 cursor-pointer"}
      onClick={toggleFavorite}
    >
      {!isSelected && <Image src={favoriteUnselected} alt="savet listing" />}
      {isSelected && <Image src={favoriteSelected} alt="savet listing" />}
    </div>
  );
};

export default FavoriteIcon;
