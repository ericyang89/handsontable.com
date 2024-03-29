(function() {
  var
    container = document.getElementById('error'),
    hot1;

  function init() {
    hot1 = new Handsontable(container, {
      data: Handsontable.helper.createSpreadsheetData(10, 13),
      width: 702,
      colWidths: 54,
      readOnly: true,
      cell: [
        // 4(1)
        {row: 1, col: 3, className: "cell-dark"},
        {row: 2, col: 3, className: "cell-dark"},
        {row: 3, col: 3, className: "cell-dark"},
        {row: 4, col: 3, className: "cell-dark"},
        {row: 5, col: 3, className: "cell-dark"},
        {row: 6, col: 3, className: "cell-dark"},
        {row: 7, col: 3, className: "cell-dark"},
        {row: 8, col: 3, className: "cell-dark"},
        {row: 2, col: 2, className: "cell-dark"},
        {row: 5, col: 2, className: "cell-dark"},
        {row: 3, col: 1, className: "cell-dark"},
        {row: 4, col: 1, className: "cell-dark"},
        {row: 5, col: 1, className: "cell-dark"},
        // 0
        {row: 1, col: 5, className: "cell-dark"},
        {row: 2, col: 5, className: "cell-dark"},
        {row: 3, col: 5, className: "cell-dark"},
        {row: 4, col: 5, className: "cell-dark"},
        {row: 5, col: 5, className: "cell-dark"},
        {row: 6, col: 5, className: "cell-dark"},
        {row: 7, col: 5, className: "cell-dark"},
        {row: 8, col: 5, className: "cell-dark"},
        {row: 1, col: 6, className: "cell-dark"},
        {row: 8, col: 6, className: "cell-dark"},
        {row: 1, col: 7, className: "cell-dark"},
        {row: 2, col: 7, className: "cell-dark"},
        {row: 3, col: 7, className: "cell-dark"},
        {row: 4, col: 7, className: "cell-dark"},
        {row: 5, col: 7, className: "cell-dark"},
        {row: 6, col: 7, className: "cell-dark"},
        {row: 7, col: 7, className: "cell-dark"},
        {row: 8, col: 7, className: "cell-dark"},
        // 4(2)
        {row: 1, col: 11, className: "cell-dark"},
        {row: 2, col: 11, className: "cell-dark"},
        {row: 3, col: 11, className: "cell-dark"},
        {row: 4, col: 11, className: "cell-dark"},
        {row: 5, col: 11, className: "cell-dark"},
        {row: 6, col: 11, className: "cell-dark"},
        {row: 7, col: 11, className: "cell-dark"},
        {row: 8, col: 11, className: "cell-dark"},
        {row: 2, col: 10, className: "cell-dark"},
        {row: 5, col: 10, className: "cell-dark"},
        {row: 3, col: 9, className: "cell-dark"},
        {row: 4, col: 9, className: "cell-dark"},
        {row: 5, col: 9, className: "cell-dark"}
      ]
    });
  }
  $(function() {
    init();
    $("td").on("click", function () {
      $(this).toggleClass('cell-dark');
    });
  });
}());
