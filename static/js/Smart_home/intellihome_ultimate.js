function back() {
  // Use the history object to go back
  window.history.back();
}
 // Prices for each item
 var itemPrices = {
  1: 8000,
  2: 60000,
  3: 13800,
  4: 9600,
  5: 8100,
  6: 9500,
  7: 165000,
  8: 15000,
  9: 65000,
  10: 20000,
  11: 14500,
  12: 29700,
  13: 20000,
  14: 15000

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
  console.log("+++",formattedTotal)
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
    var totalPrice8 = parseFloat(document.getElementById("price8")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice9 = parseFloat(document.getElementById("price9")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice10 = parseFloat(document.getElementById("price10")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice11 = parseFloat(document.getElementById("price11")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice12 = parseFloat(document.getElementById("price12")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice13 = parseFloat(document.getElementById("price13")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice14 = parseFloat(document.getElementById("price14")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var laborPrice = parseFloat(document.getElementById("laborPrice")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    
  
    console.log("price",totalPrice7)
    // Calculate the total amount
    var totalAmount = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4 + totalPrice5 + totalPrice6 + totalPrice7 + totalPrice8 + totalPrice9 + totalPrice10 + totalPrice11 + totalPrice12 + totalPrice13 + totalPrice14 + laborPrice;
    var formattedTotalAmount = totalAmount.toLocaleString();
    console.log("formatted total price",formattedTotalAmount)
  
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
  
    var totalPrice1 = parseFloat(document.getElementById("price1")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice2 = parseFloat(document.getElementById("price2")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice3 = parseFloat(document.getElementById("price3")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice4 = parseFloat(document.getElementById("price4")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice5 = parseFloat(document.getElementById("price5")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice6 = parseFloat(document.getElementById("price6")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice7 = parseFloat(document.getElementById("price7")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice8 = parseFloat(document.getElementById("price8")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice9 = parseFloat(document.getElementById("price9")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice10 = parseFloat(document.getElementById("price10")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice11 = parseFloat(document.getElementById("price11")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice12 = parseFloat(document.getElementById("price12")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice13 = parseFloat(document.getElementById("price13")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var totalPrice14 = parseFloat(document.getElementById("price14")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
    var laborPrice = parseFloat(document.getElementById("laborPrice")?.innerHTML?.replace(/[^\d.]/g, '')) || 0;
  
    var totalAmount = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4 + totalPrice5 + totalPrice6 + totalPrice7 + totalPrice8 + totalPrice9 + totalPrice10 + totalPrice11 + totalPrice12 + totalPrice13 + totalPrice14 + laborPrice;
  
    var formattedTotalAmount = totalAmount.toLocaleString();
  
    // Update the total amount
    document.getElementById("total").innerHTML = "₹ " + formattedTotalAmount + " + GST";
  }

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.hover-btn');
  
    buttons.forEach(button => {
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.zIndex = '1';
      });
  
      button.addEventListener('mousemove', e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);
  
        const hoverArea = button.dataset.hover ? 0.7 : 0.5;
  
        if (distance < rect.width * hoverArea) {
          button.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px) scale(1.15)`;
          button.style.zIndex = '10';
        } else {
          button.style.transform = 'scale(1)';
          button.style.zIndex = '1';
        }
      });
    });
  });




  function downloadPDF() {
    const doc = new jsPDF();
    const img = new Image();
  
    img.src = 'static/img/onwords.png';
    doc.addImage(img, 'PNG', 15, 5, 38, 25);
    doc.setFontSize(18);
    doc.setTextColor(236, 96, 109); // Red color
    doc.text('QUOTATION', 153, 21);
    doc.setTextColor(0); // Reset to black color
  
    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  
    // Add today's date below "Quotation" text
    doc.setFontSize(10);
    doc.text('Date :', 165, 27);
  
    doc.text(`${formattedDate}`, 175, 27);
    // Add additional details
    doc.setFontSize(10);
    
   // Assuming you have already created a PDF document instance named 'doc'
  
  // Set bold font style
  doc.setFontStyle('bold');
  
// Add labels
doc.text('From    ', 20, 40);
doc.text('Address ', 20, 46);
doc.text('Location', 20, 52);
doc.text('', 20, 58);
doc.text('Phone   ', 20, 64);
doc.text('Email   ', 20, 70);
doc.text('Website ', 20, 76);
doc.text('GSTIN   ', 20, 82);

// Reset font style to normal
doc.setFontStyle('normal');
doc.text(':', 40, 40);
doc.text(':', 40, 46);
doc.text(':', 40, 52);
doc.text('', 40, 58);
doc.text(':', 40, 64);
doc.text(':', 40, 70);
doc.text(':', 40, 76);
doc.text(':', 40, 82);

// Add remaining text
doc.text('Onwords Smart Sollution', 47, 40);
doc.text('1/1 RR Garden, Zamin Muthur,', 47, 46);
doc.text('Pollachi, Coimbatore, Tamilnadu ', 47, 52);
doc.text('- 642005', 47, 58);

doc.text('+91 7708630275', 47, 64);
doc.text('cs@onwords.in', 47, 70);
doc.text('www.onwords.in', 47, 76);
doc.text('33BTUPN5784J1ZT', 47, 82);

  
  //////// Customers Address /////////
doc.setFontStyle('bold');

// Add labels
doc.text('To    ', 120, 40);
doc.text('Phone ', 120, 46);
doc.text('Location ', 120, 52);


// Reset font style to normal
doc.setFontStyle('normal');
doc.text(':', 140, 40);
doc.text(':', 140, 46);
doc.text(':', 140, 52);

var name = document.getElementById('inp_name').value;
var phone = document.getElementById('inp_Phone').value;
var place = document.getElementById('inp_Place').value;
// Add remaining text

// Add wrapped text to the PDF
doc.text(name, 147, 40); // Adjust the maxWidth and lineHeight as needed
doc.text(phone, 147, 46);
doc.text(place, 147, 52, { maxWidth: 37 }); // Maximum width set to 67

  
    const headers = ['PRODUCT NAME', 'QUANTITY', 'UNIT PRICE','TOTAL'];
    const rows = ['1', '2', '3', '4','5','6','7','8','9','10', '11' ,'12','13' ,'14', 'labour'];
    
// Set the position for the table
    const tableTop =  90;
    const rowHeight = 10;
  
    // Calculate dynamic column widths
    const colWidth = [80, 30, 30, 30]; // Adjusted total width
  
    // Draw the table headers
    headers.forEach((header, i) => {
      drawCell(doc, 20 + colWidth.slice(0, i).reduce((sum, width) => sum + width, 0), tableTop, colWidth[i], rowHeight, header, [213, 57, 73], [255, 255, 255]); // Red background color and white text color
    });
  
    // Draw the table rows
    let currentRowTop = tableTop + rowHeight;
    let isRed = false;

    rows.forEach((rowId, index) => {
    const rowData = getElementValues(rowId, `quantity${rowId.slice(0)}`, `unit_price${rowId.slice(0)}`, `price${rowId.slice(0)}`);
    if (rowData.length === 0 || rowData.every((cell) => cell === '')) {
      return;
    }
  
    let bgColor;
    if (index === -1 || index === -2 || index === -3 || index === -4 || index === -5 || index === -6) {
      bgColor = [255, 255, 255]; // Set background color to white for specific rows (2, 4, 6, 8, 10, 12)
    } else {
      bgColor = isRed ? [255, 228, 231] : [255, 255, 255]; // Alternating background colors
      isRed = !isRed;
    }

    rowData.forEach((cell, j) => {
      drawCell(doc, 20 + colWidth.slice(0, j).reduce((sum, width) => sum + width, 0), currentRowTop, colWidth[j], rowHeight, cell, bgColor);
    });
    
    // Adjust currentRowTop only if the row contains data
    currentRowTop += rowHeight;
  });
  
  const tableBottom = currentRowTop;
  doc.setLineWidth(0.1);
  doc.line(20, tableBottom, 20 + colWidth.reduce((sum, width) => sum + width, 0), tableBottom);
  
  const totalAmountValues = getElementValues('total_amount', 'total');
  
  const totalAmount = totalAmountValues[3]; 
  
  doc.setFontStyle('bold');
  const totalsText = ['Total                :', 'CGST 9%        :', 'SGST 9%        :', 'Grand Total  :']; 
  
  const totals = [totalAmount, '', '', '']; 
  const gst_total = "18%";
  const totalAmountt = parseFloat(totals[0].replace(/[^\d.]/g, ''));
  const gstPercentage = parseFloat(gst_total);
  
  let grandTotal;
  
  if (!isNaN(totalAmountt) && !isNaN(gstPercentage)) {
    const cgstPercentage = gstPercentage / 2; // Split GST into CGST and SGST
    const sgstPercentage = gstPercentage / 2;
  
    const cgstAmount = totalAmountt * (cgstPercentage / 100); // Calculate CGST amount
    const sgstAmount = totalAmountt * (sgstPercentage / 100); // Calculate SGST amount
  
    grandTotal = totalAmountt + cgstAmount + sgstAmount; // Remove the 'let' keyword here
  
    // Format total amount and update the totals array with the calculated Grand Total
    totals[0] =  'Rs :' + totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    totals[1] = 'Rs : ' + cgstAmount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    totals[2] = 'Rs : ' + sgstAmount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    totals[3] = 'Rs : ' + grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  
  } else {
    console.error("Invalid totalAmount or gstPercentage");
  }
  
  const totalsX = 34 + colWidth.reduce((sum, width) => sum + width, 0) - 70; // Adjust the position
  const totalsY = tableBottom + 10;
  const totalsSpacing = 8;
  
  totalsText.forEach((text, index) => {
    const isGrandTotal = index === 3;
    // Set font to bold for "Grand Total"
    const fontWeight = isGrandTotal ? 'bold' : 'normal';
    const yOffset = isGrandTotal ? 5 : 0; // Adjust the vertical offset as needed
  
    doc.setFont(undefined, fontWeight);
  
    // Draw top border for "Grand Total"
    if (isGrandTotal) {
      doc.setLineWidth(0.1); // Decrease the border width
      doc.line(totalsX, totalsY + index * totalsSpacing, totalsX +50, totalsY + index * totalsSpacing);
  
      doc.setFontSize(11); // Adjust the font size as needed
      doc.text(' ', totalsX + 50, totalsY + index * totalsSpacing);
    }
  
    doc.text(totalsX, totalsY + index * totalsSpacing + yOffset, text);
    doc.text(totalsX + 28, totalsY + index * totalsSpacing + yOffset, totals[index]);
  
    // Draw bottom border for "Grand Total"
    if (isGrandTotal) {
      doc.setLineWidth(0.1); // Decrease the border width
      doc.line(totalsX, totalsY + (index + 1) * totalsSpacing, totalsX + 50, totalsY + (index + 1) * totalsSpacing);
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
doc.setFontSize(10);
  
// Assuming you have already created a PDF document instance named 'doc'
// Set bold font style
doc.setFontStyle('bold');

// Add labels
const labels = ['Acc.Name', 'Bank', 'Acc.No', 'IFSC Code', 'UPI', '','Scan to pay'];
const labelWidth = labels.reduce((maxWidth, label) => Math.max(maxWidth, doc.getStringUnitWidth(label)), 0);
const padding = 5; // Adjust padding as needed

labels.forEach((label, index) => {
    doc.text(label, additionalInfoX, additionalInfoY + (index * 6));
});

// Reset font style to normal
doc.setFontStyle('normal');
doc.text(':', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding, additionalInfoY);
doc.text(':', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding, additionalInfoY + 6);
doc.text(':', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding, additionalInfoY + 12);
doc.text(':', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding, additionalInfoY + 18);
doc.text(':', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding, additionalInfoY + 24);
doc.text('', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding, additionalInfoY + 30);
doc.text(':', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding, additionalInfoY + 36);

// Generate UPI QR code
const upiId = "onwordspay@ybl";
const merchantName = "Onwords Smart Solution";
const merchantCode = "1234";
const custTxnId = "CUSTOMER123456";
const orderNumber = "Order123";
const paymentDescription = "Payment for Order";
const currency = "INR";


var upiLink = `upi://pay?pa=${upiId}&pn=${merchantName}&mc=${merchantCode}&tid=${custTxnId}&tr=${orderNumber}&tn=${paymentDescription}&am=${grandTotal}&cu=${currency}`;

var qr = qrcode(0, 'M'); // Create QR Code instance with medium error correction level
qr.addData(upiLink);
qr.make();

// Draw QR code on the PDF
var qrSize = 15; // Adjust size as needed
var qrX = additionalInfoX + labelWidth * doc.internal.scaleFactor + padding + 7; // Adjust X position
var qrY = additionalInfoY + 28; // Adjust Y position
for (var x = 0; x < qr.getModuleCount(); x++) {
  for (var y = 0; y < qr.getModuleCount(); y++) {
    if (qr.isDark(x, y)) {
      doc.setDrawColor(0);
      doc.setFillColor(0);
    } else {
      doc.setDrawColor(255);
      doc.setFillColor(255);
    }
    var px = qrX + (x * qrSize) / qr.getModuleCount();
    var py = qrY + (y * qrSize) / qr.getModuleCount();
    doc.rect(px, py, qrSize / qr.getModuleCount(), qrSize / qr.getModuleCount(), 'F');
  }
}

// Add remaining text
doc.text('Onwords', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding + 7, additionalInfoY);
doc.text('HDFC', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding + 7, additionalInfoY + 6);
doc.text('50-2000-6540-3656', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding + 7, additionalInfoY + 12);
doc.text('HDFC0000787', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding + 7, additionalInfoY + 18);
doc.text('onwordspay@ybi', additionalInfoX + labelWidth * doc.internal.scaleFactor + padding + 7, additionalInfoY + 24);
  
  const timestamp = new Date().toISOString().replace(/[-:.]/g, ''); // Generate a timestamp in the format 'yyyyMMddTHHmmss'
  const filename = `Quotation_${timestamp}.pdf`;
  doc.save(filename);  
}
  
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
  $(document).ready(function() {
 
    $("#btn-download").click(function() {
      
      $("#myModal").css("display", "block");
    });
  
   
    $(".close").click(function() {
    
      $("#myModal").css("display", "none");
    });
  
    $("#btn-ok").click(function() {
    
      $("#myModal").css("display", "none");
      
      downloadPDF()
        var $btnDownload = $(this);
  
    });
  
    
    $("#btn-cancel").click(function() {
      
      $("#myModal").css("display", "none");
      
    });
  });