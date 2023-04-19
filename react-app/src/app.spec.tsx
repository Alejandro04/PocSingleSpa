import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./characterStates', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    characters: [
      { id: 1, name: 'Rick', status: 'Alive', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
      { id: 2, name: 'Morty', status: 'Alive', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
      { id: 3, name: 'Summer', status: 'Alive', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' },
    ],
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
    handlePageChange: jest.fn(),
  })),
}));


describe('App', () => {
  test('renders characters', () => {
    render(<App name="Rick" lang="en" />);

    expect(screen.getByText('Rick')).toBeInTheDocument();
    expect(screen.getByText('Morty')).toBeInTheDocument();
    expect(screen.getByText('Summer')).toBeInTheDocument();
  });
});