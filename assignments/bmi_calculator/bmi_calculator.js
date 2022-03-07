// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    // calculate the BMI
    //let BMI=mass/height*height

    const BMI=mass/Math.pow(height,2)

    if ((typeof(mass)=== 'number' && mass>0) && (typeof(height) === 'number' && height > 0)){
        return BMI
    }else{
        return "INVALID INPUT"
    }

}

module.exports = BMICalculator;
