function pageView(keepId, changeId) {
    let url = new URL(window.location.href);
    if (Number(keepId) > Number(changeId)) {
        changeId = (Number(keepId) + 1)
    } else {
        changeId = (Number(changeId) + 1)
    }

    url.search = "?id=" + keepId + "&newid=" + (changeId);

    window.location.href = url.toString();

    if (changeId > 100 || keepId > 100) {
        reset();
    }
}
function reset() {
    console.log("RESET")
    let url = new URL(window.location.href);
    url.search = "?id=1&newid=2";

    window.location.href = url.toString();
}