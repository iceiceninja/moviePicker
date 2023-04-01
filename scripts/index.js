function pageView(keepId, changeId) {
    //If isLeft is clicked, then the left button was clicked so increment right
    let url = new URL(window.location.href);
    if (Number(keepId) > Number(changeId)) {
        changeId = Number(keepId) + 1
    } else {
        changeId = Number(changeId) +1
    }
    if (Number(changeId) >= 100) {
        changeId = 1
    }

    url.search = "?id=" + keepId + "&newid=" + (changeId);

    window.location.href = url.toString();
}
function reset() {
    let url = new URL(window.location.href);
    url.search = "?id=1&newid=2";

    window.location.href = url.toString();
}