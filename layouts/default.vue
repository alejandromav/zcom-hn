<template>
  <div id="app">
    <header class="header">
      <nav class="inner" role="navigation">
        <router-link to="/" exact>
          <img class="logo" src="~/assets/logo-white.svg" alt="logo" />
        </router-link>
        <router-link v-for="(list, key) in feeds" :key="key" :to="`/${key}`">{{ list.title }}</router-link>
      </nav>
    </header>
    <nuxt nuxt-child-key="none" role="main" />
  </div>
</template>

<script>
import { feeds } from "~/common/api";

export default {
  head() {
    const host = process.server
      ? this.$ssrContext.req.headers.host
      : window.location.host;

    return {
      link: [
        // We use $route.path since we don't use query parameters
        { rel: "canonical", href: `https://${host}${this.$route.path}` }
      ]
    };
  },
  computed: {
    feeds: () => feeds
  }
};
</script>

<style lang="stylus">
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  background-color: lighten(#eceef1, 30%);
  margin: 0;
  padding: 0;
  color: #2d2d2d;
  overflow-y: scroll;
}

a {
  color: #2d2d2d;
  text-decoration: none;
}

.header {
  background-color: #fff;
  z-index: 999;
  height: 55px;
  border-bottom: 1px solid #848484;

  .inner {
    max-width: 800px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 15px 5px;
  }

  a {
    color: #2d2d2d;
    line-height: 24px;
    transition: color 0.15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: 0.075em;
    margin-right: 1.8em;

    &:hover {
      color: #2d2d2d;
    }

    &.router-link-active, &.nuxt-link-active {
      color: #2d2d2d;
      font-weight: 600;
    }

    &:nth-child(6) {
      margin-right: 0;
    }
  }

  .github {
    color: #2d2d2d;
    font-size: 0.9em;
    margin: 0;
    float: right;
  }
}

.logo {
  width: 46px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}

.view {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.appear-active {
  transition: opacity 0.4s ease;
}

.page-enter-active, .page-leave-active {
  transition: all 0.2s ease;
}

.appear, .page-enter, .page-leave-active {
  opacity: 0;
}

.header {
  background-color: #2d2d2d;

  a {
    color: #fff;

    &:hover {
      color: #fff;
    }

    &.router-link-active, &.nuxt-link-active {
      color: #fff;
    }
  }

  .github {
    color: #fff;
  }
}

.news-item .host, .news-item .meta {
  font-size: 0.85em;
  color: #999;
}

@media (max-width: 860px) {
  .header .inner {
    padding: 15px 30px;
  }
}

@media (max-width: 600px) {
  .header {
    .inner {
      padding: 15px;
    }

    a {
      margin-right: 1em;
    }

    .github {
      display: none;
    }
  }
}
</style>
