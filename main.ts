makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    basic.showString("Hello!")
})
makerbit.onIrDatagram(function () {
    basic.showString(makerbit.irDatagram())
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
basic.forever(function () {
	
})
