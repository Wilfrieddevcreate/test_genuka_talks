import { useState } from "react";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("todays-task");

  // Gestion des clics sur les menus
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <header className="relative bg-white border-b shadow-sm py-5 rounded-md ">
      <nav className="flex justify-center items-center space-x-8  animate__animated animate__fadeIn animate__delay-1s">
        {/** Menus */}
        {["messages", "todays-task", "last-activity"].map((menu) => (
          <button
            key={menu}
            className={`relative px-4 pb-2 text-2xl font-medium ${
              activeMenu === menu
                ? "text-black font-bold"
                : "text-gray-400 hover:text-gray-500"
            }`}
            onClick={() => handleMenuClick(menu)}
          >
            {menu === "messages" && "Messages"}
            {menu === "todays-task" && "Today's Task"}
            {menu === "last-activity" && "Last Activity"}

            {/** Trait noir en dessous du bouton actif */}
            {activeMenu === menu && (
              <div className="absolute bottom-[-20px] left-0 right-0 h-[2px] bg-black"></div>
            )}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
