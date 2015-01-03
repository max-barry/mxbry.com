// $(function() {
//     $(".view-wrap").on("click", function(){
//         var _this = $(this);
//         $(".view-wrap.active").removeClass("active");
//         _this.addClass("active");
//         $(".overview-lister")
//         .addClass("transition-overview")
//         .removeClass (function (index, css) {
//             return (css.match (/(^|\s)ow-\S+/g) || []).join(' ');
//         }).addClass("ow-" + _this.data("view"));
//     });
// });

// $(function() {
//     $(".overview-controls .control").on("click", function(){
//         $(".overview-filter").toggleClass("overview-filter-open");
//     });
// });

$(function() {
    var $overview_lister = $(".overview-lister"),
        initial_load_no = 9;
    // var $overview_lister = $(".overview-lister"),
    //     items_per_page = 9,
    //     $item;

    mb.overview = {};
    // mb.overview.page = 0;
    // mb.overview.animating = false;
    
    // function append_item(item) {
    //     console.log(item.category);
    //     console.log(item.live);
    //     $item = portfolio_item_source(item);
    //     $overview_lister.append($item);
    // }

    // function fetch_items(no_to_fetch, filter) {
    //     mb.overview.animating = true;

    //     var items = !!filter ? filter(mb.projects): mb.projects,
    //         items_to_show = items.slice(mb.overview.page * items_per_page, (mb.overview.page * items_per_page) + items_per_page),
    //         i = 0;

    //     mb.overview.page = mb.overview.page + 1;

    //     if (items_to_show.length > 0) {
    //         var revealInt = setInterval(function(){
    //             append_item(items_to_show[i]);
    //             if (i == items_to_show.length - 1) {
    //                 clearInterval(revealInt);
    //                 mb.overview.animating = false;
    //                 append_if_floor();
    //             } else {
    //                 i++;
    //             }
    //         }, 250);
    //     }
    // }
    
    function get_items_for_category(category) {
        return category == "all" ? mb.overview.projects : _.filter(mb.overview.projects, {"category":category});
    }

    function preset_category_button(category) {
        // Desktop
        $(".overview-controls ul")
        .find("li.active").removeClass("active")
        .end()
        .find("[data-category='" + category + "']").addClass("active");

        // Mobile
        $(".overview-filter select").val(category);
    }

    function append_item(item) {
        $item = portfolio_item_source(item);
        $overview_lister.append($item);
    }

    function load_items(items) {
        for (var i = 0; i < items.length; i++) {
            append_item(items[i]);
        }
    }

    function load_inital() {
        var i = 0,
            items_to_show = mb.overview.projects.slice(0, initial_load_no),
            revealInt = setInterval(function(){
                append_item(items_to_show[i]);
                if (i == items_to_show.length - 1) {
                    clearInterval(revealInt);
                    var remainder = mb.overview.projects.slice(initial_load_no);
                    load_items(remainder);
                    // mb.overview.animating = false;
                    // append_if_floor();
                } else {
                    i++;
                }
            }, 250);
    }

    $.getJSON("/static/data/projects.json", function(response){
        mb.overview.projects = response.projects.reverse();

        var hash = window.location.hash.split("#")[1],
            items = hash ? get_items_for_category(hash) : undefined;

        if (hash && items) {
            preset_category_button(hash);
            load_items(items);
        } else {
            load_inital();
        }
        mb.utils.remove_loader();
    });

    // /**
    // Changes the category of work items on display
    // */
    // function change_category() {
    //     // Visual swapping of active control trigger
    //     $(".overview-controls li.active").removeClass("active");
    //     var category = $(this).addClass("active").data("category");

    //     // Clear existing items
    //     $(".overview-lister article").remove();

    //     // Reset page count to 0
    //     mb.overview.page = 0;

    //     // Fetches items for that category
    //     fetch_items(items_per_page, function(items){
    //         return _.filter(items, {"category":category});
    //     });
    // }

    /**
    Changes the category of work items on display
    */
    function change_category() {
        var category;

        if ($(this).get(0).tagName === "SELECT") {
            category = $(".overview-filter select").val();
            console.log(category);
        } else {
            $(".overview-controls li.active").removeClass("active");
            category = $(this).addClass("active").data("category");
        }

        // Clear existing items
        $(".overview-lister article").remove();

        /**
        Ternary checks if category is "all"

        If not all, filter all items by the category given
        */
        var items_for_cat = get_items_for_category(category);
        load_items(items_for_cat);
    }

    $("body")
    .on("click", ".overview-controls li:not(.active)", change_category)
    .on("change", ".overview-filter select", change_category);
    
    // /**
    // Paginates the work items if and when the user reaches bottom of the page.
    // */
    // function append_if_floor() {
    //     if (mb.utils.reached_floor(150) && !mb.overview.animating) {
    //         fetch_items(items_per_page);
    //     }
    // }

    // $(window).on("scroll", append_if_floor);

});