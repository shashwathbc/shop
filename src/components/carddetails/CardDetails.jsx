import React ,{useEffect , useState}from "react";
import { Table } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import {DELETE , ADD , REMOVE} from "../../redux/actions/action";
import { useDispatch } from 'react-redux';

const CardDetails = () => {

  const [data , setData] = useState([]);

  const {id} = useParams();

  const dispatch = useDispatch();

  const history = useNavigate();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log("redux data in cart page ",getdata);

  //function to display if the id and data matches only then that will get displayed:
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    // console.log(comparedata);
    setData(comparedata);
  }

  //remove item :
  const remove = (item) =>{
    dispatch(REMOVE(item))
  }


  useEffect(()=>{
   compare();
  },[id]);

  //add data
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
    }

  const dlt = (id) => {
    dispatch(DELETE(id));
    history("/");
  }

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Detail Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {
              data.map((ele)=> {
                return (
                  <>
                       <div className="items_img">
              <img
                src={ele.imgdata}
                alt=""
              />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p><strong>Restorent :</strong>  {ele.rname}</p>
                    <p><strong>Price :</strong>  Rs.{ele.price}</p>
                    <p><strong>Dishes :</strong>  {ele.address}</p>
                     <p><strong>Total :</strong>  Rs.{ele.price * ele.qnty}</p>
                     <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:"100%" , cursor:"pointer" , background:"black" , color:"white"}}>
                       <span style={{fontSize:25}} onClick={ele.qnty <=1 ? ()=> dlt(ele.id) : ()=>remove(ele)}>-</span>
                          <span style={{fontSize:22}}>{ele.qnty}</span>
                          <span style={{fontSize:25}} onClick={()=> send(ele)}>+</span>
                     </div>
                  </td>

                  <td>
                  <p><strong>Rating :</strong><span style={{background: "green" , color:"white" , padding:"2px 5px", borderRadius: "5px"}}>{ele.rating} ★</span> </p>
                  <p><strong>Order Review :</strong><span >{ele.somedata}</span> </p>
                  <p><strong>Remove :</strong><span><DeleteIcon onClick={()=> dlt(ele.id)} style={{color: "red" , fontSize:30,cursor:"pointer"}} /></span> </p>
                  </td>
                </tr>
                </Table>
            </div>
      
                  </>
                )
              })
            }
                </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
