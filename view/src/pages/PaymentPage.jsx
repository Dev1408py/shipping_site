import React from 'react';


function PaymentPage() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="payment-dashboard">
            <div className="partition">
                <h2>Previous Payments</h2>
                <div className="payment-list">
                    {/* Add your previous payments list here */}
                </div>
            </div>
            <div className="partition">
                <h2>Current Order Payments</h2>
                <div className="payment-list">
                    {/* Add your current order payments list here */}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default PaymentPage;

