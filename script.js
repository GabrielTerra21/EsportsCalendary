// IDs dos seus vídeos do YouTube
const videoIDs = [
    "Wg3ihG36KYs", // Exemplo
    "Wg3ihG36KYs", // Exemplo
    "Wg3ihG36KYs"  // Exemplo
  ];
  
  // Container onde os vídeos serão inseridos
  const videoContainer = document.getElementById("videos");
  
  // Geração dos cards de vídeo
  videoIDs.forEach(id => {
    const card = document.createElement("div");
    card.className = "video-card";
  
    card.innerHTML = `
      <div class="video-wrapper">
        <iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>
      </div>
    `;
  
    videoContainer.appendChild(card);
  });
  