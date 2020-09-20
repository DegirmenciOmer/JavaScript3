//   const paginationElement = document.getElementById('pagination');
  
//   function setupPagination(items, wrapper, rowsPerPage) {
//       wrapper.innerHTML = '';
//       let pageCount = Math.ceil(items.length / rowsPerPage);
//       for (let i = 1; i < pageCount + 1; i++) {
//           let btn = paginationBtn(i, items);
//           wrapper.appendChild(btn);
//           paginationBtn(i, contributors);
//       }
//   }
  
//   function paginationBtn(page, items) {
//       let btn = createAndAppend('button', contributorSection);
//       btn.innerText = page;
//       if (currentPage == page) btn.classList = ('active');
//     //   btn.addEventListener('click', function () {
//     //       currentPage = page; 
//     //       displayList(items, listElement, rows, currentPage);
  
//     //       let currentBtn = document.querySelector('.pagenumbers btn.active');
//     //       currentBtn.classList.remove('active');
//     //       this.classList.add('active')
//     //   })
//       return btn;
//   }
  
// //   displayList(contributors, ul, rows, currentPage)
// //   setupPagination(contributors, ul, rows);