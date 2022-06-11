import React,{useState , useEffect} from "react";
import { Button, Container, Nav, Navbar, Table} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import {NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import {DELETE} from "../../redux/actions/action";
import { useDispatch } from 'react-redux';

import {UserAuth} from "../../context/AuthContext";

const HeaderComp = () => {
const {user , logOut} = UserAuth();

const handleSignOut = async () => {
   try{
    await logOut()
   }catch(error){
    console.log(error);
   }
}


  const [price , setPrice] = useState(0);
console.log(price);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("redux data",getdata);

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DELETE(id));
  }

  const total = () => {
    let price = 0;
    getdata.map((ele,k)=>{
      price = ele.price * ele.qnty + price
    })
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total]);


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
          <img src={user?.photoURL} style={{width: "40px" ,height : "40px" , borderRadius: "50%"}} alt="" />
          {user?.displayName ? (
     <Button variant="dark" onClick={handleSignOut}>
      {user?.displayName} <strong>LogOut</strong></Button>
       ) : (
        <NavLink to="/login"  className="text-decoration-none text-light">
        <Button variant="dark">Login</Button>
        </NavLink>
       )
          }
         
         
          <Badge badgeContent={getdata.length} color="primary"
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
        {
          getdata.length ? 
          <div className = "card_details" style={{width: "24rem" , padding: 10}}>
             <Table>
               <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
                </thead>
                <tbody>
                  {
                    getdata.map((e) => {
                      return (
                        <>
                        <tr>
                          <td>
                            <NavLink  to={`/cart/${e.id}`}  onClick={handleClose}>
                            <img src={e.imgdata} style={{width : "5rem" , height: "5rem"}} alt="" />
                            </NavLink>
                          
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : Rs.{e.price * e.qnty}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p onClick={()=> dlt(e.id)}>
                              <DeleteIcon style={{color: "red" , fontSize:20 , cursor: "pointer"}}/>
                            </p>
                          </td>
                        </tr>
                        </>
                      )
                    })
                  }
                  <p className="text-center">Total : Rs.{price}</p>
                </tbody>
              </Table>
          </div> : 
            <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem" , padding: "10px" , position :"relative"}}>
            <CloseIcon style={{position:"absolute" , top:2,right:20,fontSize:23 ,cursor:"pointer"}} onClick={handleClose} />
             <p style={{fontSize:22}}>Your cart is Empty</p>
             <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
            </div>
        }
      
      </Menu>
      </Navbar>
    </>
  );
};

export default HeaderComp;
