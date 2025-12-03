import React from 'react';

export interface JobType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatData {
  name: string;
  value: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}