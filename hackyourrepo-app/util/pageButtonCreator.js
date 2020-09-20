function paginationBtn(page, items, ) {
    let btn = createAndAppend('button', contributorSection);
    btn.innerText = page;
    if (currentPage == page) btn.classList = ('active');
    btn.addEventListener('click', function () {
        currentPage = page; 
        renderContributorsSection(items, rows, currentPage);
        this.classList = 'active';
    })
    return btn;
}
