import { useContext } from "react";
import { DarkLightContext } from "../context/DarkLightContext";

function useDarkLight() {
    const { darkMode, setDarkMode } = useContext(DarkLightContext);
    return { darkMode, setDarkMode };
}

export default useDarkLight;
