import { ToastMessage } from "@/utils/toastMessages";
import { api } from "./api";

// export type ItemList = {
//   product: string;
//   quantity: number;
//   priceUnity: number;
// }

// export type ListDetails = {
//   id?: string;
//   createdat?: Date;
//   description: string;
//   items: ItemList[];
//   statuslist: boolean;
//   receipt?: string;
//   createdby: string;
// }
type LoginProps = {
  email: string;
  password: string
}

type Token = {
  access_token: string;
}

export type User = {
  id: string;
  email: string;
  name: string;
  username?: string;
  address?: [];
  photo?: string;
  receipts?: [];
  friends?: [];
  lists?: [];
  createdat?: string;
}

async function handleLogin({ email, password }: LoginProps) {
  try {
    const { data } = await api.post("/login", {
      email,
      password
    });
    return data;

  } catch (error) {
    return ToastMessage.errorToast('Ops!😔', 'E-mail ou senha invalidos!')
  }
}

async function handleGetUserData() {
  try {
    const { data } = await api.get<{ user: User }>(`/me`);
    return data.user;

  } catch (error) {
    throw error
  }
}

export const UserServer = { handleLogin, handleGetUserData } 