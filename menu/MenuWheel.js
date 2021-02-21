import { useEffect, useState } from "react";
import WheelPicker from "react-simple-wheel-picker";
import { menu, aboutMenu, codeMenu, fashionMenu } from "../menu/en/menu";
import { useRouter } from "next/router";

const MenuWheel = ({ currentMenu, currentMenuIndex, getSubMenu }) => {
  const [mainMenu, setMainMenu] = useState(currentMenu);
  const [subMenu, setSubMenu] = useState(aboutMenu);
  let pushHistory;
  const router = useRouter();

  const handleMenuChange = (target) => {
    console.log("MenuWheel", target.value);
    setMainMenu(target.value);
    setTimeout(() => {
      router.push("/" + target.value);
      // clearTimeout(pushHistory);
    }, 1000);
  };

  const handleSubMenuChange = (target) => {
    console.log(target);
    getSubMenu(target.value);
  };

  useEffect(() => {
    adaptMenu(mainMenu);
  }, [mainMenu]);

  const adaptMenu = () => {
    if (mainMenu === "about") setSubMenu(aboutMenu);
    if (mainMenu === "code") setSubMenu(codeMenu);
    if (mainMenu === "fashion") setSubMenu(fashionMenu);
  };

  const menuColor = () => {
    if (mainMenu === "fashion") {
      return "#8236FF";
    } else if (mainMenu === "about") {
      return "#F6FF8F";
    } else if (mainMenu === "code") {
      return "#92FF8F";
    } else {
      return "#F6FF8F";
    }
  };

  return (
    <div className="container">
      <div className="white-box"></div>
      <WheelPicker
        className="wheel"
        data={menu}
        onChange={handleMenuChange}
        height={150}
        width={100}
        titleText="Enter value same as aria-label"
        itemHeight={30}
        selectedID={menu[currentMenuIndex].id}
        color="grey"
        activeColor="white"
        backgroundColor="#000000"
        shadowColor="black"
      />
      <WheelPicker
        className="wheel"
        data={subMenu}
        onChange={handleSubMenuChange}
        height={150}
        width={100}
        titleText="Enter value same as aria-label"
        itemHeight={30}
        selectedID={subMenu[0].id}
        color="#50844F"
        activeColor={menuColor()}
        backgroundColor="#000000"
        shadowColor="black"
      />
    </div>
  );
};

export default MenuWheel;
