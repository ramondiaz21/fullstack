/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

function bonAppetit(bill, k, b) {
  const annaBill = bill.reduce((total, itemPrice, currentItem) => {
      // don't add the item anna didn't eat.
      if (currentItem === k) {
          return total;
      }
      
      return total + itemPrice;
  }, 0);
  const annaBillSplit = annaBill / 2;
  
  // if the split bill is equal to what anna paid
  if (annaBillSplit === b) {
      console.log('Bon Appetit');
      return; // stop running.
  }
  
  // anna get's this back.
  console.log(b - annaBillSplit);
}