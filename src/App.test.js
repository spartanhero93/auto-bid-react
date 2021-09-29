import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'
import Sidebar from './Containers/Sidebar'
import { Link } from './Tests/hover'

test('Check the sidebar links', () => {
  const component = renderer.create(<Sidebar />)
  let tree = component.toJSON()
  const liArr = tree.children.filter(i => i.type === 'ul')[0].children
  const [Account, Explore, EndingSoon, MyBids, Support] = liArr
  expect(Account.children.join('')).toEqual('Account')
  expect(Explore.children.join('')).toEqual('Explore')
  expect(EndingSoon.children.join('')).toEqual('Ending Soon')
  expect(MyBids.children.join('')).toEqual('My Bids')
  expect(Support.children.join('')).toEqual('Support')
})

test('one plus two is three', () => {
  expect(1 + 2).toEqual(3)
})
