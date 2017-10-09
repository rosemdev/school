(function ($) {
    $.widget("ui.accordionWdg", {
        options: {
            activeClass: 'active',
            singleMode: true,
            activeTab: -1


        },

        tabs: [],
        contents: [],
        tabState: [],
        activeTabIndex: -1,


        _create: function () {
            var self = this;
            this.tabs = this.element.find("[data-role=tab]"),
                toggleList = this.element.find("[data-role=toggle]");


            self.contents = this.tabs.map(function (index, tab) {
                var content = $(tab).find("[data-role=content]");
                self.tabState[index] = {
                    expanded: false
                };

                return content;
            });


            if (this.options.activeTab !== -1) {
                var tabIndex = this.options.activeTab;
                this.activeTabIndex = tabIndex;
                self.tabState[tabIndex].expanded = true;
                $(self.tabs[tabIndex]).addClass(self.options.activeClass);
                console.log(self.tabState[tabIndex]);
                this.contents[tabIndex].css({
                    display: 'block'
                });
            }


            this.element.on("click", "[data-role=toggle]", function (event) {
                var index = toggleList.index(event.currentTarget);

                if (self.tabState[index].expanded) {
                    self.hideContent(index);
                } else {
                    if (self.options.singleMode && (self.activeTabIndex !== -1)) {
                        self.hideContent(self.activeTabIndex);
                    }

                    self.showContent(index);
                }

                // $(tabs[index]).toggleClass(self.options.activeClass);
                // var content = $(tabs[index]).find("[data-role = content]");
                // content.slideToggle();
            });

        },

        showContent: function (tabIndex) {
            var self = this;
            this.activeTabIndex = tabIndex;
            var content = this.contents[tabIndex];
            console.log(self.tabs[tabIndex]);

            $(this.tabs[tabIndex]).addClass(self.options.activeClass);
            $(content).slideDown(400, function () {
                self.tabState[tabIndex].expanded = true;
            });

        },

        hideContent: function (tabIndex) {
            var self = this;
            this.activeTabIndex = -1;
            var content = this.contents[tabIndex];


            $(self.tabs[tabIndex]).removeClass(self.options.activeClass);
            $(content).slideUp(400, function () {
                self.tabState[tabIndex].expanded = false;
            });
        }


    });

}(jQuery));