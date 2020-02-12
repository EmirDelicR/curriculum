<template>
  <div class="pages-stack">
    <div class="page" id="home">
      <span class="page-name">{{ $t(`nav-bar.home`) }}</span>
      <Home v-if="isCurrentPage('home')" />
    </div>
    <div class="page" id="timeline">
      <span class="page-name">{{ $t(`nav-bar.timeline`) }}</span>
      <Timeline v-if="isCurrentPage('timeline')" />
    </div>
    <div class="page" id="skill">
      <span class="page-name">{{ $t(`nav-bar.skill`) }}</span>
      <Skills v-if="isCurrentPage('skill')" />
    </div>
    <div class="page" id="certificate">
      <span class="page-name">{{ $t(`nav-bar.certificate`) }}</span>
      <Certificates v-if="isCurrentPage('certificate')" />
    </div>
    <div class="page" id="portfolio">
      <span class="page-name">{{ $t(`nav-bar.portfolio`) }}</span>
      <Portfolio v-if="isCurrentPage('portfolio')" />
    </div>
    <div class="page" id="tips">
      <span class="page-name">{{ $t(`nav-bar.tips`) }}</span>
      <Tips v-if="isCurrentPage('tips')" />
    </div>
    <div class="page" id="contact">
      <span class="page-name">{{ $t(`nav-bar.contact`) }}</span>
      <Contact v-if="isCurrentPage('contact')" />
    </div>
  </div>
</template>

<script>
import {
  endTransitionHandler,
  getStackPages,
  buildPageStack
} from "@/utils/menuHelpers";

import { lazyLoadPage } from "@/utils/helpers";

const Home = lazyLoadPage("Home");
const Portfolio = lazyLoadPage("Portfolio");
const Timeline = lazyLoadPage("Timeline");
const Skills = lazyLoadPage("Skills");
const Certificates = lazyLoadPage("Certificates");
const Contact = lazyLoadPage("Contact");
const Tips = lazyLoadPage("Tips");

export default {
  components: {
    Home,
    Portfolio,
    Timeline,
    Skills,
    Certificates,
    Contact,
    Tips
  },
  data() {
    return {
      stack: null,
      menuButton: null,
      nav: null,
      isMenuOpen: false,
      current: 0,
      numberOfPages: 0,
      pages: null,
      currentPage: "home"
    };
  },
  mounted() {
    this.stack = document.querySelector(".pages-stack");
    this.menuButton = document.querySelector("button.menu-button");
    this.nav = document.querySelector(".pages-nav");

    this.init();
  },
  methods: {
    init() {
      this.pages = [...this.stack.children];
      this.numberOfPages = this.pages.length;

      buildPageStack(this.current, this.numberOfPages, this.pages);
      this.initEvents();
    },

    initEvents() {
      const navItems = [...this.nav.querySelectorAll(".link--page")];
      this.menuButton.addEventListener("click", this.toggleMenu);

      navItems.forEach(item => {
        const pageid = item.getAttribute("href").slice(1);
        item.addEventListener("click", ev => {
          ev.preventDefault();
          this.openPage(pageid);
        });
      });

      this.pages.forEach(page => {
        const pageid = page.getAttribute("id");
        page.addEventListener("click", ev => {
          if (this.isMenuOpen) {
            ev.preventDefault();
            this.openPage(pageid);
          }
        });
      });
    },

    openPage(id) {
      const pageToOpen = id
        ? document.getElementById(id)
        : this.pages[this.current];

      const newPage = this.pages.indexOf(pageToOpen);
      const stackPages = getStackPages(
        this.current,
        this.numberOfPages,
        newPage
      );

      pageToOpen.style.transform = "translate3d(0, 0, 0)";
      pageToOpen.style.opacity = 1;

      stackPages.forEach(pageIndex => {
        const page = this.pages[pageIndex];
        page.style.transform = "translate3d(0,100%,0)";
      });

      if (id) {
        this.current = newPage;
        this.currentPage = id;
      }

      this.addRemoveClass(false);

      endTransitionHandler(pageToOpen, () => {
        this.stack.classList.remove("pages-stack--open");
        buildPageStack(this.current, this.numberOfPages, this.pages);
        this.isMenuOpen = false;
      });
    },

    openMenu() {
      this.isMenuOpen = true;
      this.addRemoveClass(true);
      this.stack.classList.add("pages-stack--open");
      const stackPages = getStackPages(this.current, this.numberOfPages);

      stackPages.forEach((pageIndex, index) => {
        const page = this.pages[pageIndex];
        const translationValue = parseInt(-1 * 200 - 50 * index);
        page.style.transform = `translate3d(0, 75%, ${translationValue}px)`;
      });
    },

    closeMenu() {
      this.openPage();
    },

    addRemoveClass(add) {
      if (add) {
        this.menuButton.classList.add("menu-button--open");
        this.nav.classList.add("pages-nav--open");
      } else {
        this.menuButton.classList.remove("menu-button--open");
        this.nav.classList.remove("pages-nav--open");
      }
    },

    toggleMenu() {
      this.isMenuOpen ? this.closeMenu() : this.openMenu();
    }
  },
  computed: {
    isCurrentPage() {
      return page => this.currentPage === page;
    }
  }
};
</script>
