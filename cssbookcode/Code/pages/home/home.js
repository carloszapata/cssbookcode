(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        ready: function (element, options) {
            chapters.forEach(function (c) {
                c.click = function (e) { WinJS.Navigation.navigate("/pages/chapter/chapter.html", c); };
                c.click.supportedForProcessing = true;
            });
            var chaptersList = new WinJS.Binding.List(chapters);

            var list = document.querySelector("div[data-win-control='WinJS.UI.ListView']").winControl;
            list.itemDataSource = chaptersList.dataSource;
            list.itemTemplate = document.querySelector("div[data-win-control='WinJS.Binding.Template']");
        }
    });
})();
