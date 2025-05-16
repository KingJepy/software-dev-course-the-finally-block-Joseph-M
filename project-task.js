/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  try {
    // TODO: Add input validation here
    if ( !fileData || typeof fileData !== "string"){
      throw new Error (err);
    }

    if ( !fileName || typeof fileName !== "string") {
      throw new Error (err);
    }

    // TODO: Implement simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    
    // TODO: Add simulated file operations (reading/writing)
    
  } catch (err) {
    // TODO: Implement error handling
    console.log(`Error processing file "${fileName}":`, err.message);
    //console.error(err);
  } finally {
    console.log(`Finished processing ${fileName}`);
  }
  // TODO: Implement a finally block to close resources
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
console.log("*****");
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
console.log("*****");
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
console.log("*****");
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
