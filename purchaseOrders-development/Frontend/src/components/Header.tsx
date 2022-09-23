import { Nav, Navbar } from "react-bootstrap";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="p-2" href='/'>React Project</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto ms-2'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/evc'>EV Calculation</Nav.Link>
            <Nav.Link href='/dmr'>Raise DMR</Nav.Link>
            <Nav.Link href='#'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
