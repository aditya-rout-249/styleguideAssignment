// Programme to calculate paint for a house

/** Declaring variables for different parameters of infrastructure
 * height, width , lenghth are in feet
 */
const rooms = 4;
const height = 12;
const roomWidth = 15;
const roomLength = 20;
const hallWidth = 20;
const hallLength = 30;

/**  Initiating home object with predefined parameters
 * paintPerSqFeet is in ml
 */
const home = {
  rooms,
  height,
  roomWidth,
  roomLength,
  hallWidth,
  hallLength,
  paintPerSqFeet: 30,

  // Method to calculate infrastructure area returns type number
  calculateArea() {
    const roomArea =
      this.roomLength * this.height * 2 +
      this.roomWidth * this.height * 2 +
      this.roomWidth * this.roomLength;

    const hallArea =
      this.height * this.hallLength * 2 +
      this.hallWidth * this.height * 2 +
      this.hallLength * this.hallWidth;

    return roomArea * this.rooms + hallArea;
  },

  // Method to calculate paint amount in Litres return type number
  calculatePaint() {
    const totalPaint = this.calculateArea() * this.paintPerSqFeet;

    return totalPaint / 1000;
  },
};
