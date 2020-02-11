<template>
  <div id="app">
    <NavBar />
    <Main />
    <MenuButton />
    <LanguageSwitcher />
    <PwaInstallButton />
  </div>
</template>

<script>
import NavBar from "./components/Nav/nav-bar";
import MenuButton from "./components/Nav/menu-button";
import Main from "./components/main";
import LanguageSwitcher from "./components/Language/language-switcher";
import PwaInstallButton from "./components/InstallButton/pwa-install-button";

export default {
  components: {
    NavBar,
    MenuButton,
    Main,
    LanguageSwitcher,
    PwaInstallButton
  },
  mounted() {
    this.$i18n.locale = "en";
  }
};
</script>

<style lang="scss" src="@/assets/css/app.scss"></style>
