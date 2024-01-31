function back() {
  // Use the history object to go back
  window.history.back();
}
 // Prices for each item
 var itemPrices = {
    1: 4000,
    2: 48500,
    3: 13800,
    4: 8100,
    5: 9600,
    6: 9500,
    7: 8000

  };
  
  function increaseQuantity(itemNumber) {
    var quantityInput = document.getElementById("quantity" + itemNumber);
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
  
    updatePrice(itemNumber, "quantity" + itemNumber, "price" + itemNumber);
  }
  
  function decreaseQuantity(itemNumber) {
    var quantityInput = document.getElementById("quantity" + itemNumber);
    var currentQuantity = parseInt(quantityInput.value);
  
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
      updatePrice(itemNumber, "quantity" + itemNumber, "price" + itemNumber);
    }
  }
  
  function updatePrice(itemNumber, quantityId, priceId) {
    var price = itemPrices[itemNumber];
    var quantity = parseInt(document.getElementById(quantityId).value);
    var total = price * quantity;
  
    // Format the total with a comma for thousands
    var formattedTotal = total.toLocaleString();
  
    // Update the individual item price
    document.getElementById(priceId).innerHTML = "&#8377; " + formattedTotal;
  
    // Update the total amount
    updateTotalAmount();
  }
  
  function updateTotalAmount() {
    var totalPrice1 = parseFloat(document.getElementById("price1")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice2 = parseFloat(document.getElementById("price2")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice3 = parseFloat(document.getElementById("price3")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice4 = parseFloat(document.getElementById("price4")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice5 = parseFloat(document.getElementById("price5")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice6 = parseFloat(document.getElementById("price6")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice7 = parseFloat(document.getElementById("price7")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var laborPrice = parseInt(document.getElementById("laborPrice")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;
  
    // Calculate the total amount
    var totalAmount = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4 + totalPrice5 + totalPrice6 + totalPrice7 + laborPrice;
  
    // Format the total with a comma for thousands
    var formattedTotalAmount = totalAmount.toLocaleString();
  
    // Update the total amount
    document.getElementById("total").innerHTML = "₹ " + formattedTotalAmount + " + GST";
  }

  var yOffset = 10; // Declare yOffset as a global variable

 
  function removeDiv(clickedElement, itemNumber) {
    // Get the parent div
    var divToRemove = clickedElement.closest('.row');
  
    // Check if the div exists before trying to remove it
    if (divToRemove) {
        // Remove the div
        divToRemove.remove();
  
        // Update prices and total amount after removing the div
        updatePricesAndTotal(itemNumber);
    }
  }
  
  function updatePricesAndTotal(removedItemNumber) {
    // Update prices for the remaining items
    updatedPrice(1, "quantity1", "price1");
    updatedPrice(2, "quantity2", "price2");
    updatedPrice(3, "quantity3", "price3");
    updatedPrice(4, "quantity4", "price4");
    updatedPrice(5, "quantity5", "price5");
  
    // Assuming you have an array to track item prices
    // itemPrices[removedItemNumber] = 0; // set removed item price to 0
  
    // Update the total amount
    updatedTotalAmount();
  }
  
  function updatedPrice(itemNumber, quantityId, priceId) {
    var price = itemPrices[itemNumber];
  
    // Check if the quantity element exists before trying to read its value
    var quantityElement = document.getElementById(quantityId);
    
    if (quantityElement) {
        var quantity = parseInt(quantityElement.value);
  
        // Check if the price element exists before trying to update its innerHTML
        var priceElement = document.getElementById(priceId);
        if (priceElement) {
            var total = price * quantity;
  
            // Format the total with a comma for thousands
            var formattedTotal = total.toLocaleString();
  
            // Update the individual item price
            priceElement.innerHTML = "&#8377; " + formattedTotal;
        }
    }
  }
  
  function updatedTotalAmount() {

    var totalPrice1 = parseInt(document.getElementById("price1")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;
    var totalPrice2 = parseInt(document.getElementById("price2")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;
    var totalPrice3 = parseInt(document.getElementById("price3")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;
    var totalPrice4 = parseInt(document.getElementById("price4")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;
    var totalPrice5 = parseInt(document.getElementById("price5")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;
    var totalPrice6 = parseInt(document.getElementById("price6")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;
    var totalPrice7 = parseInt(document.getElementById("price7")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;
    var laborPrice = parseInt(document.getElementById("laborPrice")?.innerHTML?.replace("₹ ", "").replace(",", "")) || 0;

    var totalAmount = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4 + totalPrice5 + totalPrice6 + totalPrice7 + laborPrice;
  
    var formattedTotalAmount = totalAmount.toLocaleString();
  
    // Update the total amount
    document.getElementById("total").innerHTML = "₹ " + formattedTotalAmount + " + GST";
  }



  function downloadPDF() {
    const doc = new jsPDF();
    const img = new Image();
  
    img.src = 'static/img/onwords.png';
    doc.addImage(img, 'PNG', 15, 5, 38, 25);
    doc.setFontSize(15);
    doc.text('Quotation', 165, 18);
    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  
    // Add today's date below "Quotation" text
    doc.setFontSize(10);
  
    doc.text(`${formattedDate}`, 168, 25);
    // Add additional details
    doc.setFontSize(10);
    
    doc.text('From           :', 20, 40);
    doc.text('Onwords Smart Sollution', 47, 40);
  
    doc.text('Address      :', 20, 46);
    doc.text('1/1 RR Garden, Zamin Muthur,', 47, 46);
  
    doc.text('Location      :', 20, 52);
    doc.text('Pollachi, Coimbatore, Tamilnadu - 642005', 47, 52);
  
    doc.text('Phone         :', 20, 58);
    doc.text('+91 7708630275', 47, 58);
    
    doc.text('Email           :', 20, 64);
    doc.text('cs@onwords.in', 47, 64);
  
    doc.text('Website       :', 20, 70);
    doc.text('www.onwords.in', 47, 70);
  
    doc.text('GSTIN         :', 20, 76);
    doc.text('33BTUPN5784J1ZT', 47, 76);
  
  
    const headers = ['PRODUCT NAME', 'QUANTITY', 'UNIT PRICE','TOTAL'];
    const rows = ['nme1', 'nme2', 'nme3', 'nme4', 'nme5', 'nme6', 'nme7','labour'];
    
  
    // Set the position for the table
    const tableTop = 85;
    const rowHeight = 10;
  
    // Calculate dynamic column widths
    const colWidth = [80, 30, 30, 30]; // Adjusted total width
  
    // Draw the table headers
    headers.forEach((header, i) => {
      drawCell(doc, 20 + colWidth.slice(0, i).reduce((sum, width) => sum + width, 0), tableTop, colWidth[i], rowHeight, header, [213, 57, 73], [255, 255, 255]); // Red background color and white text color
    });
  
    // Draw the table rows
    let currentRowTop = tableTop + rowHeight;
  rows.forEach((rowId) => {
    const rowData = getElementValues(rowId, `quantity${rowId.slice(-1)}`, `unit_price${rowId.slice(-1)}`, `price${rowId.slice(-1)}`);
  
    // Skip blank rows
    if (rowData.length === 0 || rowData.every((cell) => cell === '')) {
      return;
    }
  
    rowData.forEach((cell, j) => {
      drawCell(doc, 20 + colWidth.slice(0, j).reduce((sum, width) => sum + width, 0), currentRowTop, colWidth[j], rowHeight, cell);
    });
    
    // Adjust currentRowTop only if the row contains data
    currentRowTop += rowHeight;
  });
  
  // Draw a line at the bottom of the table
  const tableBottom = currentRowTop;
  doc.setLineWidth(0.1);
  doc.line(20, tableBottom, 20 + colWidth.reduce((sum, width) => sum + width, 0), tableBottom);
  
  const totalAmountValues = getElementValues('total_amount', 'total');
  
  const totalAmount = totalAmountValues[3]; 
  
  const totalsText = ['Total              :', 'GST               :', 'Grand Total  :'];
  const totals = [totalAmount,  '18%']; 
  const totalAmountt = parseFloat(totals[0].replace(/[^\d.]/g, ''));
  const gstPercentage = parseFloat(totals[1]);
  
  
  // Check if both totalAmount and gstPercentage are valid numbers
  if (!isNaN(totalAmountt) && !isNaN(gstPercentage)) {
    const grandTotal = totalAmountt + (totalAmountt * (gstPercentage / 100));
  
    // Format total amount and update the totals array with the calculated Grand Total
    totals[0] = totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    totals[2] = grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  
  
  } else {
    console.error("Invalid totalAmount or gstPercentage");
  }
  
  
  const totalsX = 34 + colWidth.reduce((sum, width) => sum + width, 0) - 70; // Adjust the position
  const totalsY = tableBottom + 10;
  const totalsSpacing = 8;
  
  totalsText.forEach((text, index) => {
    const isGrandTotal = index === 2;
    // Set font to bold for "Grand Total"
    const fontWeight = isGrandTotal ? 'bold' : 'normal';
    const yOffset = isGrandTotal ? 5 : 0; // Adjust the vertical offset as needed
  
    doc.setFont(undefined, fontWeight);
  
    // Draw top border for "Grand Total"
    if (isGrandTotal) {
      doc.setLineWidth(0.1); // Decrease the border width
      doc.line(totalsX, totalsY + index * totalsSpacing, totalsX + 43, totalsY + index * totalsSpacing);
  
      doc.setFontSize(11); // Adjust the font size as needed
      doc.text(' ', totalsX + 50, totalsY + index * totalsSpacing);
    }
  
    doc.text(totalsX, totalsY + index * totalsSpacing + yOffset, text);
    doc.text(totalsX + 28, totalsY + index * totalsSpacing + yOffset, totals[index]);
  
    // Draw bottom border for "Grand Total"
    if (isGrandTotal) {
      doc.setLineWidth(0.1); // Decrease the border width
      doc.line(totalsX, totalsY + (index + 1) * totalsSpacing, totalsX + 43, totalsY + (index + 1) * totalsSpacing);
    }
  
    // Reset font and font size to normal after drawing the text
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10); // Set the default font size
  });
  
  const totalsSectionBottom = totalsY + (totalsText.length + 3) * totalsSpacing; // Add some padding
  doc.setLineWidth(0.1);
  doc.line(20, totalsSectionBottom, doc.internal.pageSize.width - 20, totalsSectionBottom); // Use full page width
  
  const additionalInfoX = 20; 
  const additionalInfoY = tableBottom + 10; 
  doc.text('Acc.Name    :    Onwords', additionalInfoX, additionalInfoY);
  doc.text('Bank            :    HDFC', additionalInfoX, additionalInfoY + 6);
  doc.text('Acc.No         :    50-2000-6540-3656', additionalInfoX, additionalInfoY + 12);
  doc.text('IFSC Code  :    HDFC0000787', additionalInfoX, additionalInfoY + 18);
  doc.text('UPI              :    onwordspay@ybi', additionalInfoX, additionalInfoY + 24);
  
  
  const timestamp = new Date().toISOString().replace(/[-:.]/g, ''); // Generate a timestamp in the format 'yyyyMMddTHHmmss'
  const filename = `Quotation_${timestamp}.pdf`;
  doc.save(filename);  }
  
  function drawCell(doc, x, y, width, height, text, bgColor = null, textColor = [0, 0, 0]) {
    if (bgColor) {
      doc.setFillColor(bgColor[0], bgColor[1], bgColor[2]); // Set RGB color for the background
      doc.rect(x, y, width, height, 'F'); // 'F' indicates fill
    }
  
    doc.setTextColor(textColor[0], textColor[1], textColor[2]); // Set RGB color for the text
  
    // Use 'left' alignment for all cells
    doc.text(x + 2, y + height / 2, text, null, null, 'left');
  
    doc.setTextColor(0, 0, 0); // Reset text color to black
  }
  
  function getElementValues(nameId, quantityId, unitPriceId, priceId) {
    const nameElement = document.getElementById(nameId);
    const quantityElement = document.getElementById(quantityId);
    const unitPriceElement = document.getElementById(unitPriceId);
    const priceElement = document.getElementById(priceId);
  
    if (nameElement && nameElement.textContent.trim() !== '') {
      if (nameId === 'labour') {
        const labourName = nameElement.textContent.trim();
        const labourPriceElement = document.getElementById('laborPrice');
        const labourPrice = labourPriceElement ? labourPriceElement.textContent.trim().replace(/[^\x00-\x7F]/g, '') : '';
        return [labourName, '', '', labourPrice];
  
      } else if (nameId === 'total_amount') {
        const Total = nameElement.innerText;
        const totalPriceElement = document.getElementById('total');
        const Total_price = totalPriceElement ? totalPriceElement.textContent.trim().replace('₹', '').replace(/\s*\+\s*GST\s*$/, '') : '';
        return [Total, '', '', Total_price];
      
      } else if (nameElement && quantityElement && unitPriceElement && priceElement) {
        const unitPrice = unitPriceElement ? unitPriceElement.value.trim().replace(/[^\x00-\x7F]/g, '') : '';
        const price = priceElement.innerText.trim().replace(/[^\x00-\x7F]/g, '');
  
        return [nameElement.innerText, quantityElement.value, unitPrice, price];
      }
    }
  
    return [];
  }
  $("#btn-download").click(function() {
    var $btnDownload = $(this);
  
    // Check if the button is already in the "downloaded" state
    if ($btnDownload.hasClass("downloaded")) {
      // If yes, remove the "downloaded" class after a delay
      setTimeout(function() {
        $btnDownload.removeClass("downloaded");
      }, 1000); // Adjust the delay time as needed
    } else {
      // If not, toggle the "downloaded" class immediately
      $btnDownload.addClass("downloaded");
  
      // After a delay, remove the "downloaded" class to revert to the download symbol
      setTimeout(function() {
        $btnDownload.removeClass("downloaded");
      }, 2000); // Adjust the delay time as needed
    }
  });