export type Item = {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  category: string;
  imageUrl: string;
};

export type CartItem = Item & {
  qty: number;
  totalPrice: number;
};
