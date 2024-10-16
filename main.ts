/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Mr. Coxall  
* Created on: Oct 2024 
* This program finds the distance using a sonar 
*/

// variables
let distanceToObject: number = 0

// setup 
basic.showIcon(IconNames.Happy)

// find distance from sonar 
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2, 
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy) 
})
