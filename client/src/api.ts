import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
});

export const getTodo = async () => {
  const res = await instance.get("/todos");
  return res.data;
};
export const createTodo = async (title: string) => {
  const res = await instance.post("/todo", { name: title, finished: false });
  return res.data;
};

export const finishTodo = async (id: number) => {
  const res = await instance.patch("/todo/" + id);
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res = await instance.delete("/todo/" + id);
  return res.data;
};
