sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit() {
        },
        onPress(){
            MessageBox.alert("I have an alert box");
        }
    });
});