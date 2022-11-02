import { deleteAsync } from "del";

export const reset = () => deleteAsync(["dist"]);
