/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here

//    * Add-on for coffee type:
//  *   - "regular"    → +$0.00
//  *   - "latte"      → +$1.00
//  *   - "cappuccino" → +$1.50
//  *   - "mocha"      → +$2.00
//  *
// function for coffee type
    function ctype(type){
      switch(type){
        case "regular": return 0.00;
        case "latte": return 1.00;
        case "cappuccino": return 1.50;
        case "mocha": return 2.00;
      }
    }

    var cost;
    var extra1 = extras.whippedCream;
    var extra2 = extras.extraShot;


  if(size != "small" && size != "medium" && size != "large" ) return -1;
  else if(type != "regular" && type != "latte" && type != "cappuccino" && type != "mocha" ) return -1;
  else{

        switch(size){
              case "small": 
                    cost = 3.00;
                    cost+=ctype(type);
                    if(extra1) cost+=0.50;
                    if(extra2) cost +=0.75;
                    return cost;

              case "medium": 
                    cost = 4.00;
                    cost+=ctype(type);
                    if(extra1) cost+=0.50;
                    if(extra2) cost +=0.75;
                    return cost;

              case "large": 
                    cost = 5.00;
                    cost+=ctype(type);
                    if(extra1) cost+=0.50;
                    if(extra2) cost +=0.75;
                    return cost;


        }

      }
}
