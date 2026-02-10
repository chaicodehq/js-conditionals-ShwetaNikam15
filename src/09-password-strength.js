/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let strength = 0;
  // using the strict equality operator (===)
  if(password === "" || typeof password!='string') return "weak";
//Contains at least one number (0-9)// gonna try regualar expression for digit check, metacharactar \d for digits
  let pattern = /\d/; // a regex|regular expression
  if(pattern.test(password)) strength+=1;// adding to criterias

  if(password.length >= 8) strength+=1 ;

  // Contains at least one lowercase letter (a-z)
  if(password.match(/[a-z/]/)) strength+=1;

  // Contains at least one uppercase letter (A-Z)
  if(password.match(/[A-Z/]/)) strength+=1;

  //Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
    //MISTAKE: /[!@#$%^&*()_+-=[]{}|;:,.<>?]/ has unescaped brackets [] inside which breaks the regex
  // FIX 1 - ESCAPE the brackets with backslash:
  let anySpecialCh = /[!@#$%^&*()\[\]_+=\-{}|;:,.<>?]/; // escape [ ] and -
  if(anySpecialCh.test(password)) strength+=1;
  // if(password.match(/[!@#$%^&*()\[\]_+=\-{}|;:,.<>?]/)) console.log("contains special");// can use this too

  if(strength == 0 || strength == 1) return "weak";
  else if(strength == 2 || strength == 3) return "medium";
  else if(strength == 4) return "strong";
  else if(strength == 5) return "very strong";

}
//  let password = "Mataj5do|r";//need to figure out if the type value in quotes is all numbers, then how to find it make it false!
// // console.log(typeof password!='string');

// //regex

//   let pattern = /\d/; // a regex|regular expression
//   if(pattern.test(password)) console.log("contains digits from 0-9");// adding to criterias
//   if(password.length >= 8) console.log("longer than 8") ;
//   //need to parse the string for the rest of comparisons
//   // Contains at least one lowercase letter (a-z)
//   if(password.match(/[a-z]/)) console.log("contains lowercase"); // FIXED: removed "/" from inside brackets
//   // Contains at least one uppercase letter (A-Z)
//   if(password.match(/[A-Z]/)) console.log("contains uppercase"); // FIXED: removed "/" from inside brackets
  
//   //MISTAKE: /[!@#$%^&*()_+-=[]{}|;:,.<>?]/ has unescaped brackets [] inside which breaks the regex
//   // FIX 1 - ESCAPE the brackets with backslash:
//   // let anySpecialCh = /[!@#$%^&*()\[\]_+=\-{}|;:,.<>?]/; // escape [ ] and -
//   // if(anySpecialCh.test(password)) console.log("contains special");
//   if(password.match(/[!@#$%^&*()\[\]_+=\-{}|;:,.<>?]/)) console.log("contains special");


  
//   // // FIX 2 - Alternative regex using negative lookahead (matches if NOT alphanumeric or space):
//   // let specialCharRegex = /[^\w\s]/; // ^ inside [] means NOT, \w = word chars (a-z, A-Z, 0-9, _), \s = whitespace
//   // if(specialCharRegex.test(password)) console.log("contains special - FIX 2");
  
//   // // FIX 3 - Non-regex method: Loop through string and check ASCII/Unicode values
//   // let hasSpecial = false;
//   // for(let char of password) {
//   //   // Check if char is NOT alphanumeric (A-Z, a-z, 0-9)
//   //   if(!/[a-zA-Z0-9]/.test(char)) {
//   //     hasSpecial = true;
//   //     break;
//   //   }
//   // }
//   // if(hasSpecial) console.log("contains special - FIX 3");
  
//   // // BONUS: Check if password is ONLY numbers (as a string)
//   // // Method 1: Using regex - /^\d+$/ means start to end, all digits
//   // if(/^\d+$/.test(password)) console.log("password is ONLY digits");
//   // else console.log("password has non-digit characters");
  
//   // // Method 2: Non-regex - check if parsed number equals string length
//   // let testPass = "1232133"; // example number-only string
//   // if(!isNaN(testPass) && testPass.trim() !== "" && testPass.indexOf('.') === -1) {
//   //   console.log(testPass + " is a number-only string");
//   // }