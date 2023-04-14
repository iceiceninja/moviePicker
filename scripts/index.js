function pageView(keepId, changeId) {
    let url = new URL(window.location.href);
    if (Number(keepId) > Number(changeId)) {
        changeId = (Number(keepId))
    } else {
        changeId = (Number(changeId))
    }

    url.search = "?id=" + (Number(keepId) - 1) + "&newid=" + (changeId);

    window.location.href = url.toString();

    if (changeId == 100 || keepId == 100) {
        reset();
    }
}
function reset() {
    console.log("RESET")
    let url = new URL(window.location.href);
    url.search = "?id=0&newid=1";

    window.location.href = url.toString();
}