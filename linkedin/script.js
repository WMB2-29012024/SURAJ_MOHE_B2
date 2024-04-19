const FileInput2 = document.getElementById("icon2")
const bacgroundImg = document.getElementById("background-img")
const imageInput = document.getElementById('icon');
const imagePreview = document.getElementById('preview');


imageInput.style.display ="none"
FileInput2.style.display ="none"

imageInput.addEventListener('change', function() {
     const file = this.files[0]; // Get the selected file
     if (file) {
       const reader = new FileReader(); // Initialize a FileReader object
       reader.onprogress = function(e) {
         // Update the progress bar based on FileReader's progress event
         if (e.lengthComputable) {
           const progress = (e.loaded / e.total) * 100;
           progressBar.style.width = `${progress}%`;
         }
       };
       reader.onload = function(e) {
         // Set the source of the image element to the result of FileReader
         imagePreview.src = e.target.result;
         // Reset the progress bar after loading is complete
         setTimeout(() => {
           progressBar.style.width = '0%'
         }, 2000)
       };
       // Read the selected file as a Data URL
       reader.readAsDataURL(file);
     } else {
       // If no file is selected, display a default image
       imagePreview.src = '#';
       // Reset the progress bar
       progressBar.style.width = '0%';
     }
   });