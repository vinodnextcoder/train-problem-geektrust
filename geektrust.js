const fs = require("fs")
// Defining class using es6
class Vehicle {
    
    constructor(dataInput) {
      this.dataInput = dataInput;
      this.trainA = {"CHN": 0, "SLM": 350, "BLR": 550, "KRN": 900, "HYB": 1200,
                     "NGP": 1600, "ITJ": 1900, "BPL": 2000, "AGA": 2500, "NDL": 2700}
       this.trainB = {"TVC": 0, "SRR": 300, "MAQ": 600, "MAO": 1000, "PNE": 1400, "HYB": 2000,
                     "NGP": 2400, "ITJ": 2700, "BPL": 2800, "PTA": 3800, "NJP": 4200, "GHY": 4700}
     this.station_after_HYB = {"HYB": 0, "NGP": 400, "ITJ": 700, "BPL": 800,
                         "AGA": 2500, "NDL": 2700, "PTA": 3800, "NJP": 4200, "GHY": 4700}
     this.DeptTrain =[];
    }
    main(dataInput) {
    
        var inputLines = dataInput.toString().split("\n")
        inputLines = inputLines.filter(s => s.replace(/\s+/g, '').length !== 0);
        for (let i = 0; i <inputLines.length; i++) {
            if (inputLines) {
                let input = inputLines[i].split(' ')
                switch (input[0]) {
                    case 'TRAIN_A':
                         this.printTrainA(input)
                        break;
                    case 'TRAIN_B':
                        this.printTrainB(input)
                        break;
    
                }
            }
        }
        let startBoggie= ['DEPARTURE','TRAIN_AB','ENGINE','ENGINE']
        this.DeptTrain=this.DeptTrain.sort((a, b) => b.id-a.id);
        let boggieListToArray =[];
        for(let i=0;i<this.DeptTrain.length;i++){
            boggieListToArray.push(this.DeptTrain[i].name)
        }
        let boggieList = startBoggie.concat(boggieListToArray); 
        let boggie = boggieList.toString() 
        const search = ',';
        const replaceWith = ' ';
        const result = boggie.split(search).join(replaceWith);
        // let boggie1 = boggie.replace(',',' ');
        console.log(result)
        
      }

    printTrainA(input){
        let arrA = ['ARRIVAL' ,'TRAIN_A' ,'ENGINE']
        let arr=[];
        for(let i=2;i<input.length;i++){
            if(this.station_after_HYB[input[i].trim()]){
                arr.push(input[i]);
                let trainObj = new Object();
                trainObj ={name:input[i].trim(),
                 id:this.station_after_HYB[input[i].trim()]
                }
                
                this.DeptTrain.push(trainObj);
            }
        }
        let boggieList = arrA.concat(arr); 
        let boggie = boggieList.toString() 
        const search = ',';
        const replaceWith = ' ';
        const result = boggie.split(search).join(replaceWith);
        console.log(result)
        return arr;
    }
    printTrainB(input){
        let arrA = ['ARRIVAL','TRAIN_B' ,'ENGINE']
        let arr=[];
        for(let i=2;i<input.length;i++){
            if(this.station_after_HYB[input[i].trim()]){
                arr.push(input[i]);
                let trainObj = new Object();
                trainObj ={name:input[i].trim(),
                    id:this.station_after_HYB[input[i].trim()]
                   }
                this.DeptTrain.push(trainObj);
            }
        }
        let boggieList = arrA.concat(arr); 
        let boggie = boggieList.toString() 
        const search = ',';
        const replaceWith = ' ';
        const result = boggie.split(search).join(replaceWith);
        console.log(result)
        return arr;
    }
  }


const filename = process.argv[2];
data = fs.readFileSync(process.argv[2]).toString();
let bike1 = new Vehicle();
bike1.main(data)

// module.exports = { main }