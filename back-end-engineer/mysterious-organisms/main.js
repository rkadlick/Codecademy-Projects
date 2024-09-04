// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G']
	return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
	const newStrand = []
	for (let i = 0; i < 15; i++) {
	  newStrand.push(returnRandBase())
	}
	return newStrand
  }
  
  const pAequorFactory = (num, arr) => {
	return{
	  specimenNum: num,
	  dna: arr,
	  mutate(){
		let rand = Math.floor(Math.random() * this.dna.length)
		let filler = returnRandBase()
		while(filler === this.dna[rand]){
		  filler = returnRandBase()
		}
		this.dna[rand] = filler
	  },
	  compareDNA(obj){
		let same = 0;
		for(let i = 0; i < arr.length; i++){
		  
		  if(this.dna[i] === obj.dna[i]) same++;
		  
		}
		return ((same/15) * 100).toFixed(2)
	  },
	  willLikelySurvive(){
		let cgTotal = 0;
		for(let i = 0; i < this.dna.length; i++){
		  if(this.dna[i] === 'C' || this.dna[i] === 'G') cgTotal++;
		}
		  if((cgTotal/15) >= .6){
			return true
		  }else{
			return false
		  }
	  }
	}
  }
  
  let rndm = pAequorFactory(1, mockUpStrand())
  let rndm2 = pAequorFactory(2, mockUpStrand())
  console.log(rndm.dna)
  //console.log(rndm2.dna)
  //console.log(rndm.compareDNA(rndm2))
  console.log(rndm.willLikelySurvive())
  
  let instanceArray = []
  for(let i = 0; i < 30; i++){
	instanceArray.push(pAequorFactory(i, mockUpStrand()))
  }
  console.log(instanceArray)
  