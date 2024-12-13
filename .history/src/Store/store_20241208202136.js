import { writable } from "svelte/store";

export const dataStore = writable([]);

export const fetchDate = Async()=> {
     try {
          const response = await fetch("https://fakestoreapi.com/products");

          if (!response.ok) throw new Error("failed to fetch")
          
          const data = await response.json()
          
          dataStore.set(data)
     }catch(err){}


}