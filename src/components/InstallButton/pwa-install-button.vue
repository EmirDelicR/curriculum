<template>
  <div class="pwa-install-wrapper">
    <button class="add-button" id="install">
      Add to
      <i class="fas fa-home"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "pwaInstallButton",
  data() {
    return {
      btn: null,
      wrapp: null
    };
  },
  mounted() {
    this.btn = document.getElementById("install");
    this.wrapp = document.getElementsByClassName("pwa-install-wrapper")[0];
    this.installPWA();
  },
  methods: {
    installPWA() {
      window.deferredPrompt = {};

      window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();

        this.wrapp.classList.toggle("pwa-active", true);
        window.deferredPrompt = e;

        this.btn.addEventListener("click", () => {
          window.deferredPrompt.prompt();
          window.deferredPrompt.userChoice.then(result => {
            this.wrapp.classList.toggle("pwa-active", false);
            window.deferredPrompt = null;
          });
        });
      });

      if (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true
      ) {
        this.wrapp.style.display = "none";
      }

      window.addEventListener("appinstalled", () => {
        console.log("App successfully installed 👍");
      });
    }
  }
};
</script>
