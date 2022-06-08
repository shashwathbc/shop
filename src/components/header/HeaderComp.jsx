import React,{useState} from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import {NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';

const HeaderComp = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{height: "60px", zIndex:100}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light"><h1>ShashShop</h1></NavLink>
          <Nav className="me-auto">
            <NavLink to="/"  className="text-decoration-none text-light mx-5">Home</NavLink>
            <NavLink to="/about"  className="text-decoration-none text-light mx-5">About</NavLink>
            <NavLink to="/contact"  className="text-decoration-none text-light mx-5">Contact Us</NavLink>
          </Nav>
          <NavLink to="/login"  className="text-decoration-none text-light">
          <Button variant="dark">Login</Button>
          </NavLink>
         
          <Badge badgeContent={4} color="primary"
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
          >
            <ShoppingCartIcon style={{ color: "white", marginLeft: "60px" , cursor: "pointer" }} />
          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem" , padding: "10px" , position :"relative"}}>
       <CloseIcon style={{position:"absolute" , top:2,right:20,fontSize:23 ,cursor:"pointer"}} onClick={handleClose} />
        <p style={{fontSize:22}}>Your cart is Empty</p>
        <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
       </div>
      </Menu>
      </Navbar>
    </>
  );
};

export default HeaderComp;
