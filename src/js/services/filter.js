$(function() {
    
    var $hpsection = $(".hp-activities");


    // ### UTILITIES
    function reset_filter_options() {
        $(".reveal-filter-options .round-icon.active").removeClass("active");
    }

    // ### CONTROL
    function toggle_filter_options() {
        var $filterWrap = $(this).parent();
        reset_filter_options();
        if ($filterWrap.hasClass("reveal-filter-options") && $hpsection.hasClass("cat-view")) {
            return_to_initial();
        }
        $filterWrap.toggleClass("reveal-filter-options");
    }

    $(".filter .control").on("click", toggle_filter_options);

    // ### APPLYING FILTER
    function return_to_initial() {
        $(".hp-activities .activity").remove();
        $hpsection.append(mb.activities.initial_element.addClass("reset"));
        $hpsection.removeClass("cat-view");
    }
    
    function filter_for_category(category) {
        var category_change = $hpsection.hasClass("cat-view");

        /*
        If this if the first selection of a category,
        then store the initial activity list.
        */
        if (!_.has(mb.activities, "initial_element")){
            mb.activities.initial_element = $(".hp-activities .activity").detach();
        }
        /*
        Remove any and all visible activities
        */
        $(".hp-activities .activity").remove();

        /*
        Create two activity lists for each column in the
        category view structure
        */
        var $newPrime = $("<ul></ul>").addClass("activity"),
            $newSecondary = $newPrime.clone();

        var activities_for_category = _.filter(mb.activities.all_activities, {category: category}),
            activities_per_col = 3,
            col1 = activities_for_category.slice(0, activities_per_col),
            col2 = activities_for_category.slice(activities_per_col, activities_per_col * 2);

        /*
        Filter all activities by the supplied category,
        and slice x number for each column.

        Below loops over the list of items for each column
        and appends them to the container of that column.
        */
        _.forEach(col1, function(item) {
            mb.activities.append_activity($newPrime, item);
        });
        _.forEach(col2, function(item) {
            mb.activities.append_activity($newSecondary, item);
        });

        $hpsection.addClass("cat-view").append($newPrime, $newSecondary);

        if (category_change) {
            $(".source-initial").removeClass("source-initial").addClass("category-change");
        }

        $hpsection.find(".activity li").addClass("source-enter");
        setTimeout(function(){
            $(".source-initial").attr("class", "");
        }, activity_animate_time);

    }

    function activate_filter_option() {
        var $this = $(this);
        reset_filter_options();
        $this.addClass("active");
        filter_for_category($this.data("category"));
    }

    $("body").on("click", ".reveal-filter-options .round-icon:not(.control)", activate_filter_option);

});