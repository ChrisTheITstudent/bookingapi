from fastapi import FastAPI
from pydantic import BaseModel
import mysql.connector

class Contact(BaseModel):
    name: str | None = None
    phoneNo: str | None = None
    email: str | None = None

db = mysql.connector.connect(
    host="908.h.filess.io",
    port="3307",
    user="LogisticsBookings_girlplanmy",
    password="84f9768a398c609b621ff9d16f923c5388a8e339",
    database="LogisticsBookings_girlplanmy"
)

cursor = db.cursor()

app = FastAPI()

# ---------------------------Contacts end points--------------------------------
# Create a contact
@app.post("/contacts/")
def create_contact(contact: Contact):
    sql = "INSERT INTO contacts (contactName, phoneNo, email) VALUES (%s, %s, %s)"
    val =  (contact.name, contact.phoneNo, contact.email)
    cursor.execute(sql, val)
    db.commit()
    return {"name": contact.name, "phoneNo": contact.phoneNo, "email": contact.email}

# Update a contact
@app.put("/contacts/{contact_id}")
def update_contact(contact_id: int, contact: Contact):
    sql = "UPDATE contacts SET contactName = %s, phoneNo = %s, email = %s WHERE contactID = %s"
    val =  (contact.name, contact.phoneNo, contact.email, contact_id)
    cursor.execute(sql, val)
    db.commit()
    return {"name": contact.name, "phoneNo": contact.phoneNo, "email": contact.email}

# Read contacts operations
@app.get("/contacts/")
def read_contacts():
    cursor.execute("SELECT * FROM contacts")
    contacts = cursor.fetchall()
    return contacts
# Read a contact
@app.get("/contacts/{contact_id}")
def read_contact(contact_id: int):
    cursor.execute("SELECT * FROM contacts WHERE contactID = %s", (contact_id,))
    contact = cursor.fetchone()
    return contact

# Delete a contact
@app.delete("/contacts/{contact_id}")
def delete_contact(contact_id: int):
    cursor.execute("DELETE FROM contacts WHERE contactID = %s", (contact_id,))
    db.commit()
    return {"message": "Contact deleted successfully"}

# Root end point
@app.get("/")
def read_root():
    return {"Hello": "World"}