"use strict";

var PF2_UXUI_Base = PF2_UXUI_Base || (function() {

    function formatLog(
        pFunctionName,
        pMessage,
        pData = null
    ) {
        var message;
        var data;

        message = " => [" + (new Date().toUTCString()) + "]$ ";
        message += pFunctionName + ": ";
        message += pMessage;

        if (pData != null) {
            message += "(";

            data = "";
            for (const [key, value] of Object.entries(pData)) {
                if (data != "") { data += ", "; }

                data += String(key) + ": " + String(value);
            }

            message += data;
            message += ")";
        }

        log(message);
    }

    function install() {
        const FUNCNAME = "PF2_UXUI_Base.install";

        formatLog(
            FUNCNAME,
            "Attempting install"
        );
    }

    return {
        install: install
    };

}());

on("ready", function() {
    'use strict';

    PF2_UXUI_Base.install();
});
