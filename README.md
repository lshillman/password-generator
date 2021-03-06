# Secure Password Generator

A wretched little JS app viewable [here](https://lshillman.github.io/password-generator/) that uses window prompts to collect parameters that will ultimately be used to generate a password. To use, load the page and click the big red button.

Part of my goal here was to start getting comfortable with user input in JS. If I were actually building a generator for myself, the UX would be quite different.

Please note: this generator makes extensive use of Math.random() and as such, DOES NOT YIELD A TRULY RANDOM PASSWORD. Do I think it's probably good enough? Well, yeah. But I don't want to make guarantees.

# Fun code

````javascript
// most of the user prompts look something like this.

function collectLength() { // prompts the user to enter a length, then checks to see if it's valid, returns the input if so, re-prompts if not
  var passwordLength = prompt("How long should your password be? Please type a number between 8 and 128:");
  console.log("length is " + passwordLength);
  if ((passwordLength > 7) && (passwordLength < 129)) {
    pwLength = passwordLength;
    collectLowerPref();
  } else if (passwordLength != null) {
    alert("Password must be at least 8 characters and no more than 128 characters. Please try again!");
    collectLength();
  }
  else {
    console.log("argh");
  }
}
````
# In action

https://user-images.githubusercontent.com/5232938/175451943-2b4448e9-9bb4-4a9a-ba68-c30c46babc0a.mov

## Acknowledgments
I'd like to thank [@StarryBlue7](https://github.com/StarryBlue7) for talking through the randomness algorithm with me.
