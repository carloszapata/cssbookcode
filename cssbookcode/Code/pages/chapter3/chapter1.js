(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/chapter1/chapter1.html", {
        ready: function (element, options) {
            Windows.System.UserProfile.UserInformation.getFirstNameAsync().done(
                function (name) {
                    document.getElementById("myDiv").innerText = name;
                },
                function (error) {
                    document.getElementById("myDiv").innerText = error.message;
                }
            );
        }
    });
})();
