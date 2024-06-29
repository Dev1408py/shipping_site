import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrders,
  markOrderDelivered,
  createOrder,
} from "../store/actions/orderActions";
import { FcInfo } from "react-icons/fc";
import { fetchCustomers } from "../store/actions/customerActions";
import { fetchDeliveryVehicles } from "../store/actions/deliveryVehicleActions";
const OrderListPage = () => {
  const dispatch = useDispatch();
  // const { orders, error } = useSelector((store) => store.orderReducer);
  const { items } = useSelector((store) => store.itemReducer);
  const { customers } = useSelector((store) => store.customerReducer);
  const { deliveryVehicles } = useSelector(
    (store) => store.deliveryVehicleReducer
  );
  const { token } = useSelector((store) => store.authReducer);
  //console.log(error)
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedDeliveryVehicle, setSelectedDeliveryVehicle] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState(""); // State for delivery location

  const [orders,error] = useState([
    {
      _id: "1",
      orderNumber: "1001",
      isDelivered: true,
      price: 50.75,
      createdAt: "2024-06-01T10:20:30Z",
      updatedAt: "2024-06-02T11:22:33Z",
      customerId: "cust01",
      deliveryVehicleId: "veh01",
      itemId: "item01",
    },
    {
      _id: "2",
      orderNumber: "1002",
      isDelivered: false,
      price: 75.00,
      createdAt: "2024-06-02T14:15:16Z",
      updatedAt: "2024-06-03T15:17:18Z",
      customerId: "cust02",
      deliveryVehicleId: "veh02",
      itemId: "item02",
    },
    {
      _id: "3",
      orderNumber: "1003",
      isDelivered: true,
      price: 30.25,
      createdAt: "2024-06-03T18:10:20Z",
      updatedAt: "2024-06-04T19:21:22Z",
      customerId: "cust03",
      deliveryVehicleId: "veh03",
      itemId: "item03",
    },
    {
      _id: "4",
      orderNumber: "1004",
      isDelivered: false,
      price: 100.50,
      createdAt: "2024-06-04T20:25:30Z",
      updatedAt: "2024-06-05T21:26:31Z",
      customerId: "cust04",
      deliveryVehicleId: "veh04",
      itemId: "item04",
    },
    {
      _id: "5",
      orderNumber: "1005",
      isDelivered: true,
      price: 65.99,
      createdAt: "2024-06-05T22:30:35Z",
      updatedAt: "2024-06-06T23:32:33Z",
      customerId: "cust05",
      deliveryVehicleId: "veh05",
      itemId: "item05",
    },
    {
      _id: "6",
      orderNumber: "1006",
      isDelivered: true,
      price: 45.00,
      createdAt: "2024-06-06T08:10:15Z",
      updatedAt: "2024-06-07T09:12:13Z",
      customerId: "cust06",
      deliveryVehicleId: "veh06",
      itemId: "item06",
    },
    {
      _id: "7",
      orderNumber: "1007",
      isDelivered: false,
      price: 55.50,
      createdAt: "2024-06-07T10:20:25Z",
      updatedAt: "2024-06-08T11:22:23Z",
      customerId: "cust07",
      deliveryVehicleId: "veh07",
      itemId: "item07",
    },
    {
      _id: "8",
      orderNumber: "1008",
      isDelivered: true,
      price: 80.75,
      createdAt: "2024-06-08T12:30:35Z",
      updatedAt: "2024-06-09T13:32:33Z",
      customerId: "cust08",
      deliveryVehicleId: "veh08",
      itemId: "item08",
    },
    {
      _id: "9",
      orderNumber: "1009",
      isDelivered: false,
      price: 90.00,
      createdAt: "2024-06-09T14:40:45Z",
      updatedAt: "2024-06-10T15:42:43Z",
      customerId: "cust09",
      deliveryVehicleId: "veh09",
      itemId: "item09",
    },
    {
      _id: "10",
      orderNumber: "1010",
      isDelivered: true,
      price: 120.50,
      createdAt: "2024-06-10T16:50:55Z",
      updatedAt: "2024-06-11T17:52:53Z",
      customerId: "cust10",
      deliveryVehicleId: "veh10",
      itemId: "item10",
    },
    {
      _id: "11",
      orderNumber: "1011",
      isDelivered: false,
      price: 70.25,
      createdAt: "2024-06-11T18:00:05Z",
      updatedAt: "2024-06-12T19:02:03Z",
      customerId: "cust11",
      deliveryVehicleId: "veh11",
      itemId: "item11",
    },
    {
      _id: "12",
      orderNumber: "1012",
      isDelivered: true,
      price: 95.75,
      createdAt: "2024-06-12T20:10:15Z",
      updatedAt: "2024-06-13T21:12:13Z",
      customerId: "cust12",
      deliveryVehicleId: "veh12",
      itemId: "item12",
    }
  ]
  )

  useEffect(() => {
    dispatch(fetchOrders(token));
    dispatch(fetchCustomers(token)); // Fetch customers
    dispatch(fetchDeliveryVehicles(token)); // Fetch delivery vehicles
  }, [dispatch, token]);

  const handleMarkDelivered = (orderId) => {
    dispatch(markOrderDelivered(orderId, token));
  };

  const handleCreateOrder = () => {
    const item = items.find((item) => item._id === selectedItem);
    const customer = customers.find(
      (customer) => customer._id === selectedCustomer
    );
    const deliveryVehicle = deliveryVehicles.find(
      (vehicle) => vehicle._id === selectedDeliveryVehicle
    );

    if (item && customer && deliveryVehicle && deliveryLocation) {
      // Check vehicle availability and other conditions here
      // Generate a unique order number
      const orderNumber = generateUniqueOrderNumber();

      const orderData = {
        itemId: item._id,
        customerId: customer._id,
        deliveryVehicleId: deliveryVehicle._id,
        orderNumber: orderNumber, // Assign order number
        deliveryLocation: deliveryLocation, // Assign delivery location
        totalPrice: calculateTotalPrice(item), // Calculate total price based on item
      };

      dispatch(createOrder(orderData, token));
    }
  };

  const generateUniqueOrderNumber = () => {
    // Implement your logic here to generate a unique order number
    // You can use a combination of current date, a random number, etc.
    const currentDate = new Date();
    const randomNumber = Math.floor(Math.random() * 100000);
    const orderNumber = `UP80-${currentDate.getFullYear()}${
      currentDate.getMonth() + 1
    }${currentDate.getDate()}-${randomNumber}`;
    return orderNumber;
  };

  const calculateTotalPrice = (item) => {
    const additionalCharges = 10;
    const totalPrice = item.price + additionalCharges;
    return totalPrice;
  };

  return (
    <div className="order-list-container">
      <h1 className="h2-order">Order List Page</h1>
      <div className="error-message-order">
        {error != null && <>{error} </>}
      </div>
      <div className="info-icon-container">
        <FcInfo className="info-icon" />
        <div className="info-content">
          Please visit Items, customers,vehicle page to see availability
        </div>
      </div>
      <div className="create-order-section">
        <h2 className="h3-order">Create Order</h2>
        <div className="form-control">
          <label className="form-label">Delivery Location : </label>
          <input
            type="text"
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
            placeholder="Delivery Location"
            className="input-order"
          />
        </div>

        <select
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
          className="select-input"
        >
          <option value="">Select Item</option>
          {items.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
          className="select-input"
        >
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer._id} value={customer._id}>
              {customer.name}
            </option>
          ))}
        </select>
        <select
          value={selectedDeliveryVehicle}
          onChange={(e) => setSelectedDeliveryVehicle(e.target.value)}
          className="select-input"
        >
          <option value="">Select Delivery Vehicle</option>
          {deliveryVehicles.map((vehicle) => (
            <option key={vehicle._id} value={vehicle._id}>
              {vehicle.registrationNumber}
            </option>
          ))}
        </select>
        <button onClick={handleCreateOrder} className="btn-primary-order">
          Create Order
        </button>
      </div>

      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Number</th>
            <th>Delivered</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Customer ID</th>
            <th>Delivery Vehicle ID</th>
            <th>Item ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.orderNumber}</td>
              <td>{order.isDelivered ? "Yes" : "No"}</td>
              <td>${order.price}</td>
              <td>{order.createdAt}</td>
              <td>{order.updatedAt}</td>
              <td>{order.customerId}</td>
              <td>{order.deliveryVehicleId}</td>
              <td>{order.itemId}</td>
              <td>
                {!order.isDelivered && (
                  <button
                    onClick={() => handleMarkDelivered(order._id)}
                    className="btn btn-primary"
                  >
                    Mark Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default OrderListPage;

