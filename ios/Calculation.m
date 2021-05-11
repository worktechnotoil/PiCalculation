//
//  Picalculation.m
//  PiCalculation
//
//  Created by mac on 10/05/21.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface

RCT_EXTERN_REMAP_MODULE(Calculation, Calculation, NSObject)
RCT_EXTERN_METHOD(getCalculation:  (NSString *)value callback:(RCTResponseSenderBlock)callback)

@end
