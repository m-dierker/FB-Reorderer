/**
 * Constructor
 */
function FBReorder() {
    this.setup();
}

/**
 * Sets up the FBReorder
 */
FBReorder.prototype.setup = function() {
    this.reorderSidebar();
};

/**
 * Reorders the sidebar to move the groups field to the top
 */
FBReorder.prototype.reorderSidebar = function() {
    // Get the groups category
    var groupsNav = document.getElementById('groupsNav');

    // Get the sidebar container (everything but pinned stuff)
    var sidebarContainer = groupsNav.parentNode;

    // Get all the sidebar children
    var children = sidebarContainer.childNodes;

    // If the first child isn't already the groups div, then move it
    if(children[0].id != 'groupsNav') {
        sidebarContainer.insertBefore(groupsNav, children[0]);
    }

};

checkFacebook();

// Facebook emulates the browser in the browser, so we have to keep this going
window.setInterval(checkFacebook, 1000);

function checkFacebook() {
    var fbReorder = new FBReorder();
}
