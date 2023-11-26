const namespace = "heaulthyStorage";

export const deserializeStore = () => {
  const store = localStorage.getItem(namespace);
  try {
    if (store) {
      return JSON.parse(store);
    }
    return {};
  } catch (err) {
    return {};
  }
};
export const set = <T>(values: Record<string, T>) => {
  const store = deserializeStore();
  try {
    localStorage.setItem(
      namespace,
      JSON.stringify({
        ...store,
        ...values,
      })
    );
  } catch (err) {
    console.warn("Failed to save to session store");
  }
};

export const get = (key: string) => {
  const store = deserializeStore();
  return store[key];
};

export const clear = () => {
  return localStorage.removeItem(namespace);
};
