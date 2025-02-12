document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("imageUpload");
    const gallery = document.getElementById("gallery");

    for (const file of input.files) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            gallery.appendChild(img);
        };

        reader.readAsDataURL(file);
    }

    input.value = "";  // Limpar input depois do envio
});
