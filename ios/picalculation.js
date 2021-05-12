

   mess = "";
    Base = Math.pow(10, 11);                         //basevalue
    cellSize = Math.floor(Math.log(Base) / Math.LN10); //cellsise
    a = Number.MAX_VALUE;                                 //assign max value
    MaxDiv = Math.floor(Math.sqrt(a));                 //maximum division value

    function makeArray(n, aX, Integer) {                 //creating array for storing the pair of intiger values
      var i = 0;
      for (i = 1; i < n; i++) aX[i] = null;
      aX[0] = Integer
    }
    function isEmpty(aX) {                             //  checking the array is empty or not
      var empty = true
      for (i = 0; i < aX.length; i++) if (aX[i]) {
        empty = false;
        break
      }
      return empty
    }
    function Add(n, aX, aY) {                                  //add n times the x and y values
      carry = 0
      for (i = n - 1; i >= 0; i--) {
        aX[i] += Number(aY[i]) + Number(carry);
        if (aX[i] < Base) carry = 0;
        else {
          carry = 1;
          aX[i] = Number(aX[i]) - Number(Base)
        }
      }
    }
    function Sub(n, aX, aY) {                                //subtract n times with x and y values
      for (i = n - 1; i >= 0; i--) {
        aX[i] -= aY[i];
        if (aX[i] < 0) {
          if (i > 0) {
            aX[i] += Base;
            aX[i - 1]--
          }
        }
      }
    }
    function Mul(n, aX, iMult) {                 //mulityply n times with x and multiple values
      carry = 0;
      for (i = n - 1; i >= 0; i--) {
        prod = (aX[i]) * iMult;
        prod += carry;
        if (prod >= Base) {
          carry = Math.floor(prod / Base);
          prod -= (carry * Base)
        } else carry = 0;
        aX[i] = prod
      }
    }
    function Div(n, aX, iDiv, aY) {       //divide n times with x , y , divide values
      carry = 0;
      for (i = 0; i < n; i++) {
        currVal = Number(aX[i]) + Number(carry * Base);
        theDiv = Math.floor(currVal / iDiv);
        carry = currVal - theDiv * iDiv;
        aY[i] = theDiv
      }
    }
    function arctan(iAng, n, aX) {            //arctan formula implimentation
      iAng_squared = iAng * iAng;
      k = 3;
      sign = 0;
      makeArray(n, aX, 0);
      makeArray(n, aAngle, 1);
      Div(n, aAngle, iAng, aAngle);
      Add(n, aX, aAngle);
      while (!isEmpty(aAngle)) {
        Div(n, aAngle, iAng_squared, aAngle);
        Div(n, aAngle, k, aDivK);
        if (sign) Add(n, aX, aDivK);
        else Sub(n, aX, aDivK);
        k += 2;
        sign = 1 - sign
      }
      mess += "aArctan=" + aArctan
    }
    function calcPI(numDec) {            //get the nth deciaml value
      
      var ans = "";                    //result string
      t1 = new Date();                 //initial time
      numDec = Number(numDec) -1;     //decnumber
      iAng = new Array(10);            //angle array
      coeff = new Array(10);
      arrayLength = Math.ceil(1 + numDec / cellSize);
      aPI = new Array(arrayLength);
      aArctan = new Array(arrayLength);   //arctan value array
      aAngle = new Array(arrayLength);     //angle value array
      aDivK = new Array(arrayLength);
      coeff[0] = 4;
      coeff[1] = -1;
      coeff[2] = 0;
      iAng[0] = 5;
      iAng[1] = 239;
      iAng[2] = 0;
      makeArray(arrayLength, aPI, 0);  //calling functions for pi ,angle and divk values
      makeArray(arrayLength, aAngle, 0);
      makeArray(arrayLength, aDivK, 0);
      for (var i = 0; coeff[i] != 0; i++) {
        arctan(iAng[i], arrayLength, aArctan);
        Mul(arrayLength, aArctan, Math.abs(coeff[i]));
        if (coeff[i] > 0) Add(arrayLength, aPI, aArctan);
        else Sub(arrayLength, aPI, aArctan)
      }
      Mul(arrayLength, aPI, 4);                 //multiplie the pi values
      sPI = "";
      tempPI = "";
      for (i = 0; i < aPI.length; i++) {      //loop the function for storing the values
        aPI[i] = String(aPI[i]);
        if (aPI[i].length < cellSize && i != 0) {
          while (aPI[i].length < cellSize) aPI[i] = "0" + aPI[i]
        }
        tempPI += aPI[i]
      }
      for (i = 0; i <= numDec; i++) {            //checking the value grater then 0
        if (i == 0) sPI += tempPI.charAt(i) ;
        else {
          if (true) addcount = "";   //add rounded count values
          else addcount = "";
          if (true) thespace = " ";        //add space between the each pair of values
          else thespace = "";
          if ((i) % 50 == 0 && i != 0) sPI += tempPI.charAt(i) + addcount ;
          else if (i % 5 == 0) sPI += tempPI.charAt(i) + thespace;
          else sPI += tempPI.charAt(i)
        }
      }
      numDec=numDec+1

      ans += ("PI (" + numDec + ")=" + sPI + ". ");  //result the given decimal number = pi values
      t2 = new Date();
      timeTaken = (t2.getTime() - t1.getTime()) / 1000; //calculate time
      ans += "It took: " + timeTaken + " seconds";  //display time taken by the task
     return ans;
    }
