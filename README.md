# Pre-requisites
* NodeJS 12.6.0/14.15.4/16.10.0
* npm

# How to run the code

We have provided scripts to execute the code. 

Use `run.sh` if you are Linux/Unix/macOS Operating systems and `run.bat` if you are on Windows.  Both the files run the commands silently and prints only output from the input file `sample_input/input1.txt`. You are supposed to add the input commands in the file from the appropriate problem statement. 

Internally both the scripts run the following commands 

 * `npm ci --silent` - This will build the solution downloading the necessary dependencies.
 * Once the `npm install` from the previous build process is complete, we will execute the program using the command

`npm start --silent sample_input/input1.txt`

We expect your program to take the location to the text file as parameter. Input needs to be read from a text file, and output should be printed to the console. The text file will contain only commands in the format prescribed by the respective problem.

This main file, main.go should receive in the command line argument and parse the file passed in. Once the file is parsed and the application processes the commands, it should only print the output.

 # Running the code for multiple test cases

 Please fill `input1.txt` and `input2.txt` with the input commands and use those files in `run.bat` or `run.sh`. Replace `./geektrust sample_input/input1.txt` with `./geektrust sample_input/input2.txt` to run the test case from the second file. 

 # How to execute the unit tests

 Mocha based test cases are executed with the following command from the root folder
`mocha test`

Jest based test cases are executed with the following command from the root folder
`jest`
