import React, {useState} from "react";
import styles from './index.module.css'
import Text from "@/components/text";
import ColorModeToggle from "@/components/color-mode-toggle";
const Navbar = (): React.JSX.Element => {

    return (
        <nav className={styles.navbar}>
            <Text variant={"subheading"}>
                NFT Utils
            </Text>
            <div className={styles.links}>
                <Text variant={"subheading"}>
                    <a href={"/"}>Etherscan</a>
                </Text>
                <Text variant={"subheading"}>
                    <a href={"/"}>Opensea</a>
                </Text>
                <Text variant={"subheading"}>
                    <a href={"/"}>Contact</a>
                </Text>
                <ColorModeToggle />
            </div>
        </nav>
    )
}
export default Navbar;