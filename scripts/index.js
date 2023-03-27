function pageView(id) {
    let url = new URL(window.location.href);

    console.log("current page", id);
    let newPageNumber;

    if (Number(id) === 1) {
        newPageNumber = Number(id);
    }
    else {
        newPageNumber = Number(id);
    }

    console.log('want page', newPageNumber);
    if (newPageNumber == 100) {
        newPageNumber = 0
    }
    url.search = "?id=" + newPageNumber;

    window.location.href = url.toString();
}