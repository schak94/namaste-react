//import { IMAGE_LINK } from "../utils/constants";

const MenuList = ({ item }) => {
  console.log(item.card);
  return (
    <div className="text-left border-b-2 border-green-200 p-1 m-1 flex">
      <div className="w-9/12">
        <div className="py-1">
          <span className="text-xs">{item.card.info.name}-</span>
          <span className="text-xs">
            ₹
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </span>
        </div>
        <p className="text-xs">{item.card.info.description}</p>
      </div>
      <div className="p-1 w-3/12">
        <img
          className="rounded-sm"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            item.card.info.imageId
          }
        />
      </div>
    </div>
  );
};

export default MenuList;
