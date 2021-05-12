//
//  Picalculation.swift
//  PiCalculation
//
//  Created by mac on 10/05/21.
//

import Foundation
import JavaScriptCore

@objc(Calculation)
class Calculation: NSObject {
  
  @objc
  func getCalculation(_ value : String, callback: RCTResponseSenderBlock) {
      
    let n : Int = Int(value)!
    callback([self.piToN(to: n)])
      
    }
  
  
  func piToN(to n: Int) -> String {
      let jsContext = JSContext()


      // Specify the path to the jssource.js file.
      if let jsSourcePath = Bundle.main.path(forResource: "picalculation", ofType: "js") {
          do {
              // Load its contents to a String variable.
              let jsSourceContents = try String(contentsOfFile: jsSourcePath)

              // Add the Javascript code that currently exists in the jsSourceContents to the Javascript Runtime through the jsContext object.
              jsContext!.evaluateScript(jsSourceContents)
              
              let testFunction = jsContext!.objectForKeyedSubscript("calcPI")
              let result = testFunction?.call(withArguments: [n])
              return "\(result!)";

          }
          catch {
              print(error.localizedDescription)
          }
      }
      return "";
  }

    
  
  
}
