import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "@/store/store";

// Создаем типизированный useSelector хук
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
