import React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContex = createContext<Transaction[]>([]);

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContex.Provider value={transactions}>
      {children}
    </TransactionsContex.Provider>
  )
}


