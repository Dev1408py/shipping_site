import React, { useState } from 'react';

const DeliveryVehicleListPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const vehicles = [
    { type: 'Truck', img: '	https://cdn.pixabay.com/photo/2024/03/26/11/57/trucks-8656643_1280.jpg' },
    { type: 'Railway', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5WOHLTOfuNIhVXv68r_ACvFg5qHuQgZUPQ&s' },
    { type: 'Ship', img: 'https://scf.com.au/media/y4bfqsax/cosco-shipping-universe-open-water.jpg' },
    { type: 'Airplane', img: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg' },
  ];

  const handleSelect = (vehicleType) => {
    setSelectedVehicle(vehicleType);
  };

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Select a Delivery Vehicle</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.type}
            style={{
              border: selectedVehicle === vehicle.type ? '2px solid blue' : '2px solid transparent',
              borderRadius: '10px',
              padding: '10px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onClick={() => handleSelect(vehicle.type)}
          >
            <img
              src={vehicle.img}
              alt={vehicle.type}
              style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            />
            <p>{vehicle.type}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default DeliveryVehicleListPage;


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchDeliveryVehicles,
//   createDeliveryVehicle,
// } from "../store/actions/deliveryVehicleActions";

// const DeliveryVehicleListPage = () => {
//   const dispatch = useDispatch();
//   const { deliveryVehicles, error } = useSelector(
//     (store) => store.deliveryVehicleReducer
//   );

//   const { token } = useSelector((store) => store.authReducer);

//   const [newVehicleData, setNewVehicleData] = useState({
//     city: "",
//     vehicleType: "",
//     registrationNumber: "",
//   });

//   useEffect(() => {
//     dispatch(fetchDeliveryVehicles(token));
//   }, []);

//   const handleCreateVehicle = () => {
//     dispatch(createDeliveryVehicle(newVehicleData, token));
//     // Clear input fields
//     setNewVehicleData({
//       city: "",
//       vehicleType: "",
//       registrationNumber: "",
//     });
//   };

//   return (
//     <div className="delivery-vehicle-list-container">
//       <h1 className="login-heading">Delivery Vehicle List Page</h1>
//       <div className="add-vehicle-form">
//         <h2>Add New Vehicle</h2>
//         <div className="form-group-delivery">
//           <label className="form-label-delivery">City:</label>
//           <input
//             type="text"
//             value={newVehicleData.city}
//             onChange={(e) =>
//               setNewVehicleData({ ...newVehicleData, city: e.target.value })
//             }
//             className="form-input-delivery"
//           />
//         </div>
//         <div className="form-group-delivery">
//           <label className="form-label-delivery">Vehicle Type:</label>
//           <select
//             value={newVehicleData.vehicleType}
//             onChange={(e) =>
//               setNewVehicleData({
//                 ...newVehicleData,
//                 vehicleType: e.target.value,
//               })
//             }
//             className="form-input-delivery"
//           >
//             <option value="">Select Vehicle</option>
//             <option value="bike">Bike</option>
//             <option value="truck">Truck</option>
//           </select>
//         </div>
//         <div className="form-group-delivery">
//           <label className="form-label-delivery">Registration No.:</label>
//           <input
//             type="text"
//             value={newVehicleData.registrationNumber}
//             onChange={(e) =>
//               setNewVehicleData({
//                 ...newVehicleData,
//                 registrationNumber: e.target.value,
//               })
//             }
//             className="form-input-delivery"
//           />
//         </div>
//         <button onClick={handleCreateVehicle} className="create-vehicle-button">
//           Create Vehicle
//         </button>
//       </div>
//       <ul className="vehicle-list">
//         {deliveryVehicles.map((vehicle) => (
//           <li key={vehicle._id} className="vehicle-item">
//             Vehicle ID: {vehicle._id}, City: {vehicle.city}, Active Orders:{" "}
//             {vehicle.activeOrdersCount}, Vehicle Type: {vehicle.vehicleType},
//             Registration No.: {vehicle.registrationNumber}
//           </li>
//         ))}
//       </ul>
//       <div className="error-message">{error != null && <>{error} </>}</div>
//     </div>
//   );
// };

// export default DeliveryVehicleListPage;
