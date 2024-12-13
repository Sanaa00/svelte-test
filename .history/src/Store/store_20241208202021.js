import { writable } from "svelte/store";

export const dataStore = writable([]);

export const fetchDate = Async()=> {
     try {
          const response =await fetch("https://fakestoreapi.com/products")
     }catch(err){}


}