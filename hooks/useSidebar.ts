import { create } from "zustand";

interface useSidebarInterface{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useSidebar = create<useSidebarInterface>((set)=>({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: ()=> set({isOpen: false})
}))