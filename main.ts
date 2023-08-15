input.onButtonPressed(Button.A, function () {
    makerbit.sendIrDatagram("0x00FF02FD")
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrDatagram(function () {
    basic.showString(makerbit.irDatagram())
})
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
makerbit.connectIrSenderLed(AnalogPin.P1)
basic.forever(function () {
	
})
