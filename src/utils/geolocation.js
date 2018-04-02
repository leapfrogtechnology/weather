/**
 * Get current location.
 */
export async function getCurrentLocation() {
  if (!navigator.geolocation) {
    return null;
  }

  return new Promise((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(position => {
      return resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }, error => {
      return resolve(null);
    });
  });
}
