input.onButtonPressed(Button.A, function () {
    radio.sendNumber(-25)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Power")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(25)
})
radio.setGroup(1)
basic.forever(function () {
	
})
