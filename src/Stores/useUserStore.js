import create from 'zustand';

export const useUserStore = create((set) => ({
  id: null,
  isActive: 1,
  lastName: null,
  name: '',
  phoneNumber: null,
  email: '',
  token: '',
  expiration: null, 

  setUser: (data) => set({
    id: data.id,
    name: data.name,
    email: data.email,
    token: data.token,
    expiration: new Date(data.expiration), 
  }),
  clearUser: () => set({ id: null, name: '', email: '', token: '', expiration: null }),
}));
