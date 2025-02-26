sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/btp/helloworldui5/model/models",
    "sap/base/Log"
], (UIComponent, models, Log) => {
    "use strict";

    return UIComponent.extend("sap.btp.helloworldui5.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            Log.info("Hello world info log");
            Log.debug("Hello world debug log");
            Log.warning("Hello world warning log");
            Log.error("Hello world error log");
            Log.fatal("Hello world fatal log");
            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});