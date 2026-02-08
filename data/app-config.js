// Configuration for app-services

const config = {
  zones: {
    alNuzha2: {
      coordinates: {
        latitude: 30.0867,
        longitude: 31.3285
      },
      services: [
        'Delivery',
        'Food Ordering',
        'Cleaning',
        'Grocery Shopping'
      ]
    },
    bridgesSwies: {
      coordinates: {
        latitude: 30.0900,
        longitude: 31.3200
      },
      services: [
        'Delivery',
        'Food Ordering',
        'Laundry',
        'Home Maintenance'
      ]
    }
  }
};

export default config;