import React from "react";
import Link from "next/link";
import MenuCSS from "./Menu.module.scss";

const Menu = () => {
  return (
    <div>
      <ul className={MenuCSS.menu}>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/products/[category]" as={"/products/footwear"}>
            <a>Footwear Products</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
