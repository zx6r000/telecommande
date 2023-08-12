makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrDatagram(function () {
    basic.showString(makerbit.irDatagram())
})
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
basic.forever(function () {
	
})
