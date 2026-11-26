"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, Product } from "./types";

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  language: Language;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  count: number;
  total: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "follow-jesus-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CartItem[] = JSON.parse(stored);
        // ignore les anciens paniers (avant l'ajout de la langue)
        setItems(parsed.filter((i) => i.language && i.product?.gender));
      }
    } catch {
      // localStorage indisponible : on continue avec un panier vide
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) =>
          i.product.slug === newItem.product.slug &&
          i.size === newItem.size &&
          i.color === newItem.color &&
          i.language === newItem.language
      );

      if (existingIndex !== -1) {
        return prev.map((item, i) =>
          i === existingIndex
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      return [...prev, newItem];
    });
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + i.quantity * i.product.price, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, count, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé à l'intérieur de <CartProvider>");
  return ctx;
}