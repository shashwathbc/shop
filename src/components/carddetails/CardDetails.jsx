import React ,{useEffect , useState}from "react";
import { Table } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
const CardDetails = () => {

  const [data , setData] = useState([]);

  const {id} = useParams();

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

  useEffect(()=>{
   compare();
  },[id]);

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
                     <p><strong>Total :</strong>  Rs.300</p>
                  </td>

                  <td>
                  <p><strong>Rating :</strong><span style={{background: "green" , color:"white" , padding:"2px 5px", borderRadius: "5px"}}>{ele.rating} ★</span> </p>
                  <p><strong>Order Review :</strong><span >{ele.somedata}</span> </p>
                  <p><strong>Remove :</strong><span><DeleteIcon  style={{color: "red" , fontSize:30,cursor:"pointer"}} /></span> </p>
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
