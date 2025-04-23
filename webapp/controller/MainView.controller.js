sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("logaligroup.invoices.controller.MainView", {
        onInit() {
            const oJSONMolde = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONMolde.loadData("./model/SelectionScreenMenu.json")
            oView.setModel(oJSONMolde, "selectionScreen" )
        },

        onFilter(oEvent) {

        },

        onClearFilter(oEvent){
            const oModelSeScreen = this.getView().getModel("selectionScreen");
            oModelSeScreen.setProperty("/CountryKey", "")
            oModelSeScreen.setProperty("/ShipName", "")
        }
    });
});