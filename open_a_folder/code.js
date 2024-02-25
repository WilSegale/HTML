window.addEventListener('DOMContentLoaded', () => {
   const folderInput = document.getElementById('folderInput');
   const fileList = document.getElementById('fileList');
 
   folderInput.addEventListener('change', handleFolderSelection);
 
   function handleFolderSelection(event) {
     const files = Array.from(event.target.files);
     fileList.innerHTML = '';
 
     files.forEach(file => {
       const listItem = document.createElement('li');
       listItem.textContent = file.webkitRelativePath;
       fileList.appendChild(listItem);
     });
   }
 });
 