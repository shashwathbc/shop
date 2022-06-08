import React from "react";
import { Table } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
const CardDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Detail Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt=""
              />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p><strong>Restorent :</strong>  Masala Theory</p>
                    <p><strong>Price :</strong>  Rs.300</p>
                    <p><strong>Dishes :</strong>  Masala Theory</p>
                     <p><strong>Total :</strong>  Rs.300</p>
                  </td>

                  <td>
                  <p><strong>Rating :</strong><span style={{background: "green" , color:"white" , padding:"2px 5px", borderRadius: "5px"}}>3.5 ★</span> </p>
                  <p><strong>Rating :</strong><span >117 + order placed from here recently</span> </p>
                  <p><strong>Remove :</strong><span><DeleteIcon  style={{color: "red" , fontSize:30,cursor:"pointer"}} /></span> </p>
                  </td>
                </tr>
                </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
