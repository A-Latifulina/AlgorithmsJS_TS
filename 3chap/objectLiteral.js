var hotel = {
    name: 'The Spot',
    rooms: 100,
    booked: 85,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

var elementName = document.getElementById('hotelName');
elementName.textContent = hotel.name

var elementRooms = document.getElementById('rooms');
elementRooms.textContent = hotel.checkAvailability();