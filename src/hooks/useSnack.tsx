import { useContext } from "react";
import { SnackContext } from "../context/SnackContext";

export function useSnack() {
  return useContext(SnackContext)
}
