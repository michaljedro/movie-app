import * as types from "./actionTypes";
import { auth } from "../firebase";

const registerStart = () => ({
  type: types.REGISTER_START,
});
