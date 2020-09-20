  //Inspired from: https://www.youtube.com/watch?v=IqYiVHrO2U8&t=980s
  function setupPagination(items, rowsPerPage) {
    const paginationUl = createAndAppend('ul', contributorSection, {
        class: 'pagenumbers'
    })  
    paginationUl.innerHTML = '';
      let pageCount = Math.ceil(items.length / rowsPerPage);
      for (let i = 1; i < pageCount + 1; i++) {
          let btn = paginationBtn(i, items);
          paginationUl.appendChild(btn);
      }
  }
  
