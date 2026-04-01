import React, { useState } from "react";
import "./CustomerBookings.css";

const CustomerBookings = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleSelect = (type) => {
    setSelectedBooking(type);
    setReceipt(null);
    setPreviewUrl(null);
  };

  const handleClose = () => {
    setSelectedBooking(null);
    setReceipt(null);
    setPreviewUrl(null);
  };

  const handleReceiptUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReceipt(file);
      setPreviewUrl(URL.createObjectURL(file)); // generate preview
    }
  };

  const handleRemoveReceipt = () => {
    setReceipt(null);
    setPreviewUrl(null);
  };

  return (
    <div className="customer-bookings">
      <h3>📅 Bookings</h3>
      <p>Manage your reservations and appointments here.</p>

      {/* Booking type options */}
      <div className="booking-options">
        <button onClick={() => handleSelect("Hotel")}>🏨 Hotel</button>
        <button onClick={() => handleSelect("Vet")}>🐾 Vet</button>
        <button onClick={() => handleSelect("Groom")}>✂️ Groom</button>
      </div>

      {/* Popup forms */}
      {selectedBooking && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>{selectedBooking} Booking Form</h4>

            <form className="booking-form">
              {/* Common fields */}
              <label>
                Select Your Pet:
                <select>
                  <option>Max (Dog)</option>
                  <option>Bella (Cat)</option>
                </select>
              </label>

              {/* Example: Hotel-specific fields */}
              {selectedBooking === "Hotel" && (
                <>
                  <label>
                    Room Type:
                    <select>
                      <option>Standard Room - $50/night</option>
                      <option>Deluxe Room - $75/night</option>
                      <option>Suite - $100/night</option>
                    </select>
                  </label>
                  <label>
                    Check-In Date:
                    <input type="date" />
                  </label>
                  <label>
                    Check-Out Date:
                    <input type="date" />
                  </label>
                  <label>
                    Special Requests:
                    <textarea placeholder="Any special needs or requests for your pet..." />
                  </label>
                </>
              )}

              {/* Vet-specific fields */}
              {selectedBooking === "Vet" && (
                <>
                  <label>
                    Appointment Date:
                    <input type="date" />
                  </label>
                  <label>
                    Reason:
                    <textarea placeholder="Describe the health concern..." />
                  </label>
                </>
              )}

              {/* Groom-specific fields */}
              {selectedBooking === "Groom" && (
                <>
                  <label>
                    Grooming Date:
                    <input type="date" />
                  </label>
                  <label>
                    Service Type:
                    <select>
                      <option>Bath</option>
                      <option>Haircut</option>
                      <option>Nail Trim</option>
                    </select>
                  </label>
                </>
              )}

              {/* Payment receipt upload */}
              <label>
                Upload Payment Receipt:
                <input type="file" accept="image/*" onChange={handleReceiptUpload} />
              </label>

              {previewUrl && (
                <div className="receipt-preview">
                  <p>Uploaded: {receipt.name}</p>
                  <img src={previewUrl} alt="Receipt Preview" />
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={handleRemoveReceipt}
                  >
                    Remove Receipt
                  </button>
                </div>
              )}

              <button type="submit" className="submit-btn">
                Confirm Booking
              </button>
            </form>

            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerBookings;