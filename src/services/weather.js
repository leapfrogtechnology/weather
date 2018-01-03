/**
 * Convert degree to direction.
 * 
 * @param {number} degree 
 */
export function convertDegreeToCompassText(degree) {
  const degreePerDirection = Math.ceil((degree / 22.5) + 0.5);

  const directions = [
    "North",
    "North NorthEast",
    "NorthEast",
    "East NorthEast",
    "East",
    "East SouthEast",
    "SouthEast",
    "South SouthEast",
    "South",
    "South SouthWest",
    "SouthWest",
    "West SouthWest",
    "West",
    "West NorthWest",
    "NorthWest",
    "North NorthWest"
  ];

  return directions[degreePerDirection % 16];
};

/**
 * Get the updated time from given timestamp.
 * 
 * @param {string} timestamp 
 */
export function getUpdatedTime(timestamp) {
  const currentDate = new Date();
  const updatedDate = new Date(timestamp * 1000);

  const difference = parseInt(
    (currentDate.getTime() - updatedDate.getTime()) / (60 * 1000)
  );

  const hour = Math.floor(difference / 60);
  const min = difference % 60;

  return hour != 0 ? hour + "hr " + min + " min" : min + "min";
}