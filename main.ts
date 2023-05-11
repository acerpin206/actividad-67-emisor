radio.onReceivedNumber(function (receivedNumber) {
    led.setBrightness(led.brightness() + receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(-25)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Power")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Power") {
        encendido = !(encendido)
        led.setBrightness(125)
        led.enable(encendido)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(25)
})
let encendido = false
radio.setGroup(1)
encendido = false
led.enable(encendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
