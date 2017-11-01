This is the Node.js application and all interactions happen through console.

Prerequisite:
1. Node 4+
2. NPM

## Running the Program
    ### Build and run
    * Install dependency on project root:
    
        npm install
        
    2. To run the program : 
    
        npm start

    ### Testing
    
    1. Install dependency if not yet on the project root:
        npm install
    2. To run the tests:
    
        npm test

##Assumptions Made
    1. Canvas will be recreated if the canvas command is executed even after creating the elements.
    2. Border of the canvas is 1 character thick.
    3. Elements will only be created within the Canvas boundary.
    4. Bucket fill character will be only 1 character.
    5. In case of erroneous input, the program continues to run.

## Technologies Used
    1. Node.js for application
    2. babel for enabling ES6 compilation
    3. Jest for testing. Have used snapshot testing along with the normal assertions. 
        more details on snapshot testing: https://facebook.github.io/jest/docs/en/snapshot-testing.html
    