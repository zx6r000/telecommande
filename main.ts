makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
basic.forever(function () {
	
})
