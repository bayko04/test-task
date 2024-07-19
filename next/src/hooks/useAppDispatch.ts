import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";

// Создаем типизированный useDispatch хук
export const useAppDispatch = () => useDispatch<AppDispatch>();
