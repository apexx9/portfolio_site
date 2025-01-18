import {create} from "zustand";
/*
GLobal State
The gloval state will manage ;
1. the theme of the application.
2.
*/

interface themeInterface{
    theme:string;

}


const themeSelector = () => create<themeInterface>()((set) => ({
    theme: "light",
    toggleTheme: () => set((state) => ({theme: state.theme === "light" ? "dark" : "light"})),
}));