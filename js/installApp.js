// Initialize deferredPrompt for use later to show browser install prompt.

const buttonInstall = document.getElementById("install");
var displayPopUp = document.querySelector(".PopUp-Container");
AlreadyInstalled=false;
console.log(buttonInstall)


buttonInstall.addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    hidePopUp();
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  });

  window.addEventListener('appinstalled', () => {
    hidePopUp();  // Limpiar el defferedPrompt para que pueda ser eliminado por el recolector de basura
    deferredPrompt = null;
    // De manera opcional, enviar el evento de analíticos para indicar una instalación exitosa
    console.log('PWA was installed');
  });

function hidePopUp(){
  if (displayPopUp.style.display === "none") {
    displayPopUp.style.display = "block";
  } else {
    displayPopUp.style.display = "none";
  }
  
}
