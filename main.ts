basic.showIcon(IconNames.TShirt)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P15) == 0) {
        servos.P2.setAngle(110)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        servos.P2.setAngle(20)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
