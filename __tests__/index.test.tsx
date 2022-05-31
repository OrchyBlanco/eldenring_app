import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages/index'
import ResponsiveAppBar from '../components/UI/Navbar';

describe('Home', () => {
  let pageProps:any;

  beforeEach(() => {
    pageProps ={
      label:"Weapons",
      description:"Weapons in Elden Ring is a piece of offensive equipment that is used by the player's character to inflict damage against Enemies and Bosses."
    }
  })

  test('renders without crashing', () => {
    render(<Home/>);
  })
  
  test('should render label and description',()=>{
    const {getByText}= render(<Home/>);
    const label= getByText(pageProps.label);
    const description=getByText(pageProps.description);

    expect(label).toBeVisible();
    expect(description).toBeVisible();
  })
})

describe('NavBar', () => {
  
  test('renders without crashing', () => {
    render(<ResponsiveAppBar/>);
  })
})