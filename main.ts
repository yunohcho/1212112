radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 255)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(2)
})
