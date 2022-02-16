/**
 *
 * @param {string} string - The open_hours / closed_hours field returned by the hours endpoint.
 * @returns {string}  our hours formated , without the seconds, milliseconds and replace ":" per "h"
 */

export const formatTime = (string) => {
  return string.slice(0, -7).replace(":", "h");
};
