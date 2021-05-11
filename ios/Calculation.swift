//
//  Picalculation.swift
//  PiCalculation
//
//  Created by mac on 10/05/21.
//

import Foundation

@objc(Calculation)
class Calculation: NSObject {
  
  @objc
  func getCalculation(_ value : String, callback: RCTResponseSenderBlock) {
      
    let n : Int = Int(value)!
    
      let pi = String(Double.pi)
      var stringResult: String = ""
      var doubleResult: Double = 0.0
      if(n < 1 || n > 14){
          print("Please input range from 1 to 14")
      }else{
          stringResult = String(pi.prefix(n+2))

          print(stringResult)
      }

      if let tempResult = Double(stringResult) {
          doubleResult = tempResult
      } else {
        callback([doubleResult])
      }

      callback([doubleResult])
      

      
      
      
      
    }
  
    
  
  
}
