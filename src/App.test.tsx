import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
const postsData: Array<{ id: number; message: string; likesCount:number }> = [
  {id: 1, message: "hello", likesCount:12},
  {id: 2, message: "How are you?", likesCount:33},
  {id: 2, message: "How are you?", likesCount:33},
  {id: 2, message: "How are you?", likesCount:33},
  {id: 2, message: "How are you?", likesCount:33},
]
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
