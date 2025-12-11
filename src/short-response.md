Short Responses
===============

For this assessment, aim to write a response with the following qualities:

*   \[ \] Addresses all parts of the prompt
    
*   \[ \] Accurately uses relevant technical terminology
    
*   \[ \] Is free of grammar and spelling mistakes
    
*   \[ \] Is easy to comprehend
    

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

Prompt 1
--------

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

    const getLetterGrade = (score) => {
      let letter;
      if (score >= 90) {
        let letter = "A";
      } else if (score >= 80) {
        let letter = "B";
      } else if (score >= 70) {
        let letter = "C";
      } else {
        let letter = "F";
      }
    
      return "Your grade is: " + letter;
    }
    
    console.log(getLetterGrade(95)); // This should print "Your grade is: A"
    console.log(getLetterGrade(82)); // This should print "Your grade is: B"
    console.log(getLetterGrade(74)); // This should print "Your grade is: C"
    console.log(getLetterGrade(65)); // This should print "Your grade is: F"

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The code is outputting `"Your grade is: undefined"` because `letter` is reinitialized within the block scope of every `if` and `else if` statement instead of reassigned, so the value is not being read. You are not changing the value of the `letter` variable and using it, you are creating new `letter` variables with different values.

**Part B:**

I would fix this bug by removing the `let` keyword from the letter variables in the `if` and `else if` statements, which would reassign the value of `letter` instead of re-initializing it.

* * *

Prompt 2
--------

Read the following code:

    const originalSettings = { volume: 50, brightness: 80 };
    const newSettings = originalSettings;
    newSettings.volume = 75;
    console.log(originalSettings.volume);

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

The number `75` will be logged to the console because you did not create a copy of the original object in the second line when the `newSettings` variable was assigned the value of the `originalSettings` object. Since a copy of the object was not created, when the `volume` property of `newSettings` is modified to the value `75`, it modifies the value of the `originalSettings.volume` property.

**Part B:**

I would modify the code by using the `spread` operator syntax to create a shallow copy of the `originalSettings` object so the original is not affected.

**Corrected Code:**

    // Fix this code so newSettings is a true copy
    const originalSettings = { volume: 50, brightness: 80 };
    const newSettings = {...originalSettings};
    newSettings.volume = 75;
    console.log(originalSettings.volume);

* * *

Prompt 3
--------

Given this array of products and the code using `filter`:

    const products = [
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Phone", price: 700, inStock: false },
      { name: "Watch", price: 300, inStock: true },
      { name: "Tablet", price: 500, inStock: true },
    ];
    
    const itemsInStock = products.filter((product) => {
      return product.inStock
    });

Walk through what happens in the first iteration of filter:

*   What is the value of `product`?
    
*   What gets returned from the callback?
    
*   What happens with that returned value?
    

### Response 3

*   The value of `product` is a reference to the objects inside of the `products` array
    
*   The callback returns a new array of the objects whose `inStock` properties are set to `true`
    
*   The returned value is stored inside the `itemsInStock` variable