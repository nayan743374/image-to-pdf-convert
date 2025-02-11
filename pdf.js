function convertToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function() {
                // Add the image to the PDF document
                doc.addImage(img, 'JPEG', 10, 10, img.width * 0.2, img.height * 0.2); // Adjust the scale of the image as needed
                // Save the generated PDF
                doc.save('image.pdf');
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload an image!');
    }
}
