export const hexToRgb = (hex:string) => {
  // Check if the input is already in RGB format
  if (hex.startsWith('rgb(')) {
      // If it is, remove 'rgb(' and ')' and split the values
      const rgbValues = hex.substring(4, hex.length - 1).split(',');
      
      // Parse each value to integer and return as an object
      return {
          r: parseInt(rgbValues[0].trim(), 10),
          g: parseInt(rgbValues[1].trim(), 10),
          b: parseInt(rgbValues[2].trim(), 10)
      };
  } else {
      // If input is a hex code, convert it to RGB
      let r = 0, g = 0, b = 0;
      // Remove '#' if present
      hex = hex.replace('#', '');
      // Convert hexadecimal to decimal
      if (hex.length === 3) {
          r = parseInt(hex[0] + hex[0], 16);
          g = parseInt(hex[1] + hex[1], 16);
          b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
          r = parseInt(hex.substring(0, 2), 16);
          g = parseInt(hex.substring(2, 4), 16);
          b = parseInt(hex.substring(4, 6), 16);
      } else {
          throw new Error("Invalid hexadecimal color code.");
      }
      // Return as an object
      return { r, g, b };
  }
}
