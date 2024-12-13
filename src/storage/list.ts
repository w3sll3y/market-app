import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_TOKEN = "@market:new_list";

export type List = {
  id?: string;
  createdat?: Date;
  description: string;
  items: ItemList[];
  statuslist: boolean;
  receipt?: string;
  createdby: string;
};

export type ItemList = {
  id: string;
  product: string;
  quantity: number;
  priceUnity: number;
};

async function save(item: ItemList) {
  try {
    const storedList = await AsyncStorage.getItem(STORAGE_TOKEN);
    const currentList: ItemList[] = storedList ? JSON.parse(storedList) : [];
    currentList.push(item);
    await AsyncStorage.setItem(STORAGE_TOKEN, JSON.stringify(currentList));
  } catch (error) {
    throw error;
  }
}

async function get() {
  try {
    const storedList = await AsyncStorage.getItem(STORAGE_TOKEN);
    return storedList ? JSON.parse(storedList) : [];
  } catch (error) {
    throw error;
  }
}

async function edit(itemId: string, updatedItem: Partial<ItemList>) {
  try {
    const storedList = await AsyncStorage.getItem(STORAGE_TOKEN);
    const currentList: ItemList[] = storedList ? JSON.parse(storedList) : [];

    const itemIndex = currentList.findIndex(item => item.id === itemId);
    if (itemIndex === -1) throw new Error("Item não encontrado");

    currentList[itemIndex] = {
      ...currentList[itemIndex],
      ...updatedItem,
    };

    await AsyncStorage.setItem(STORAGE_TOKEN, JSON.stringify(currentList));
  } catch (error) {
    throw error;
  }
}

async function remove() {
  try {
    await AsyncStorage.removeItem(STORAGE_TOKEN);
  } catch (error) {
    throw error;
  }
}

export const listStorage = { save, get, edit, remove };
