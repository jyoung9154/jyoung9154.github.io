import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders home page', () => {
    render(<App />);
    expect(screen.getByText('AI 풀스택 개발자')).toBeInTheDocument();
});
