from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

class Contact(BaseModel):
    name: str | None = None
    phoneNo: str | None = None
    email: str | None = None

class Booking(BaseModel):
    contactID: int | None = None

db = mysql.connector.connect(
    host="908.h.filess.io",
    port="3307",
    user="LogisticsBookings_girlplanmy",
    password="84f9768a398c609b621ff9d16f923c5388a8e339",
    database="LogisticsBookings_girlplanmy"
)

cursor = db.cursor()

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------Contacts end points--------------------------------
# Create a contact
@app.post("/contacts/create")
def create_contact(contact: Contact):
    sql = "INSERT INTO Contact (contactName, phoneNo, email) VALUES (%s, %s, %s)"
    val =  (contact.name, contact.phoneNo, contact.email)
    cursor.execute(sql, val)
    db.commit()
    db.close()
    return {"name": contact.name, "phoneNo": contact.phoneNo, "email": contact.email}

# Update a contact
@app.put("/contacts/{contact_id}")
def update_contact(contact_id: int, contact: Contact):
    sql = "UPDATE Contact SET contactName = %s, phoneNo = %s, email = %s WHERE contactID = %s"
    val =  (contact.name, contact.phoneNo, contact.email, contact_id)
    cursor.execute(sql, val)
    db.commit()
    db.close()
    return {"name": contact.name, "phoneNo": contact.phoneNo, "email": contact.email}

# Read contacts operations
@app.get("/contacts/")
def read_contacts():
    cursor.execute("SELECT * FROM Contact")
    contacts = cursor.fetchall()
    db.close()
    return contacts
# Read a contact
@app.get("/contacts/{contact_id}")
def read_contact(contact_id: int):
    cursor.execute("SELECT * FROM Contact WHERE contactID = %s", (contact_id,))
    contact = cursor.fetchone()
    db.close()
    return contact

# Delete a contact
@app.delete("/contacts/delete/{contact_id}")
def delete_contact(contact_id: int):
    cursor.execute("DELETE FROM Contact WHERE contactID = %s", (contact_id,))
    db.commit()
    db.close()
    return {"message": "Contact deleted successfully"}

# ---------------------------End of Contacts end points--------------------------
# ---------------------------Bookings end points---------------------------------
# Create a booking
@app.post("/bookings/create")
def create_booking(booking: Booking):
    sql = "INSERT INTO Booking (contactID) VALUES (%s)"
    val =  (booking.contactID,)
    cursor.execute(sql, val)
    db.commit()
    db.close()
    return {"contactID": booking.contactID}

# Read bookings operations
@app.get("/bookings/")
def read_bookings():
    cursor.execute("SELECT * FROM Booking")
    bookings = cursor.fetchall()
    db.close()
    return bookings

# Read a booking
@app.get("/bookings/{booking_id}")
def read_booking(booking_id: int):
    cursor.execute("SELECT * FROM Booking WHERE bookingID = %s", (booking_id,))
    booking = cursor.fetchone()
    db.close()
    return booking

# Delete a booking
@app.delete("/bookings/delete/{booking_id}")
def delete_booking(booking_id: int):
    cursor.execute("DELETE FROM Booking WHERE bookingID = %s", (booking_id,))
    db.commit()
    db.close()
    return {"message": "Booking deleted successfully"}

# Root end point
@app.get("/")
def read_root():
    db.close()
    return {"Hello": "World"}