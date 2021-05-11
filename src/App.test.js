import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

// test('renders more than 5', () => {
//   render(<App />);
//   const element = screen.getByText(/יש מעל 5 מוצרים בקטגוריה זו/i);
//   expect(element).toBeInTheDocument();
// });

test('render less than  5', () => {
  render(<App />);
   const element = screen.queryByText("יש מעל 5 מוצרים בקטגוריה זו");
   expect(element).toBeNull();
});

test('renders correct num of li', () => {
  render(<App />);
  const element = document.querySelectorAll('li');
  expect(element).toHaveLength(4);
});


test('renders correctness', () => {
  render(<App />);
  const element = screen.queryByText("יש מעל 5 מוצרים בקטגוריה זו");
  const lis = document.querySelectorAll('li');

  if(lis.length>5)
    expect(element).toBeInTheDocument()
  else{
    expect(element).toBeNull();
  }
});


test('click', () => {
    render(<App />)

    
    userEvent.click(screen.getByText('הסתר פריטים שמחירם יקר'))
    const element = document.querySelectorAll('li');

    expect(element).toHaveLength(4);
  })