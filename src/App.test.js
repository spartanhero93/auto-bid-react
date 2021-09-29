import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from './App';
import { Link } from './Tests/hover';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("Link changes the class when hovered", () => {
//   const component = renderer.create(
//     <Link page='https://Google.com'>Google</Link>
//   )
//   let tree = component.toJSON()
// })

test('one plus two is three', () => {
  expect(1 + 2).toEqual(3)
})