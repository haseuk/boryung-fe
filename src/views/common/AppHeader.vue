<template>
  <div app-header>
    <header>
      <div class="h-inner">
        <LngLink to="/" class="logo">BORYUNG</LngLink>
        <div class="menu" @click="gnb = true">메뉴열기
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="lang-ch">
          <a class="eng-lang" v-if="lang === 'ko'" @click="changeLang('en')">ENG</a>
          <a class="kr-lang" v-if="lang === 'en'" @click="changeLang('ko')">KR</a>
        </div>
      </div>
    </header>
    <transition name="fade">
      <div class="gnb" v-if="gnb">
        <div class="dim"></div>
        <div class="gnb-list">
          <div class="lang-ch">
            <a class="eng-lang" v-if="lang === 'ko'" @click="changeLang('en')">ENG</a>
            <a class="kr-lang" v-if="lang === 'en'" @click="changeLang('ko')">KR</a>
          </div>
          <h1>BORYUNG</h1>
          <ul>
            <li><LngLink to="ceo">CEO<br class="web"> Letter</LngLink>
              <div class="depth">
                <LngLink to="ceo/kim">2022</LngLink>
              </div>
            </li>
            <li><LngLink to="our-mission">Our<br class="web"> Mission</LngLink></li>
            <li><LngLink to="our-history">Our<br class="web"> History</LngLink></li>
            <li><LngLink to="reports">Reports</LngLink>
              <div class="depth">
                <LngLink to="reports/annual">{{ $t('gnb.reports.annual.nm') }}</LngLink>
                <LngLink to="reports/audit">{{ $t('gnb.reports.audit.nm') }}</LngLink>
                <LngLink to="reports/ir">IR</LngLink>
              </div>
            </li>
            <li><LngLink to="news">News</LngLink></li>
            <li><LngLink to="care">Care In<br class="web"> Space</LngLink>
              <div class="depth">
                <LngLink to="care/intro">Intro</LngLink>
                <LngLink to="care/cis">CIS Challenge</LngLink>
              </div>
            </li>
            <li><LngLink to="link">Link to<br class="web"> Sub. Co.</LngLink></li>
          </ul>
          <a class="close" @click="gnb = false">닫기</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  data() {
    return {
      gnb: false,
    }
  },
  watch: {
    $route() {
      this.gnb = false
    }
  },
  methods: {
    changeLang(lang) {
      if (this.$route.name === 'NewsDetail') this.$router.push(`/${lang}/news`)
      else this.$router.push({ params: { lang } });
    }
  },
  mounted() {
  }
};
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;
[app-header] { .fs(0);
  #app.home & header .h-inner .logo { .hide; }
  .web { .hide; }
  header { .rel; z-index: 20;
    .h-inner { .rel; .h(80);
      .logo { .wh(207,31); .contain('/images/mo/logo.png'); .ib; .abs; .lb(69,0); }
      .menu { .wh(110,80); .abs; .rt; .pointer;
        span { .ib; .wh(60,2); .abs; .lb; .bgc(#afa89e); transition: background-color 0.4s, width 0.4s;
          &:nth-child(1) { .b(22); }
          &:nth-child(2) { .b(11); }
        }
        &:hover span { .bgc(#2d2d2f);
          &:nth-child(1) { .w(40); }
          &:nth-child(2) { .w(30); }
          &:nth-child(3) { .w(10); }
        }
      }
      .lang-ch { .abs; .rt(129,49); ;
        a { .fs(30); color:#a29992; .medium; transition:color 0.4s; }
        &:hover a { color:#2d2d2f; }
      }
    }
  }
  .gnb { .abs; .lt; .pl(33%); .-box; .f; z-index: 30;
    .dim { .fix; .f; .lt; .bgc(#000); opacity: 0.95; }
    .gnb-list { .abs; .lt; .f; .bgc(#fff); .rel; z-index: 1; .p(42,66,0,70); .-box; .tl;
      .lang-ch { .abs; .rt(129,45);
        a { .fs(30); color:#a29992; .medium; }
      }
      h1 { .wh(367,56); .contain('/images/mo/boryung-s.png'); .mt(313); }
      ul { .p(74,0); .-box; .-t(#afa89e); .-b(#afa89e); .mt(100);
        li { .fs(46); color:#a29992; .ls(-0.05em); .mb(14);
          a { .medium; }
          .depth { .pl(38); .-box; .mt(5);
            a { .fs(30); .lh(48); .block; }
          }
        }
      }
      .close { .wh(110,80); .abs; .rt;
        &:after { .cnt; .wh(38,38); .contain('/images/mo/x.png'); .abs; .rt(66,42); pointer-events: none; }
      }
    }
  }
}
@media screen and(min-width:1240px) {
  [app-header] {
    .web { .ib; }
    header { .h(109);
      .h-inner { .max-w(1240); .mh-c; .hf; .pr(40); .-box;
        .logo { .lb(60,0); }
        .menu { .wh(60,109); .r(40);
          &:after { .wh(60,24); }
        }
        .lang-ch { .abs; .rt(125,79);
          a { .lh(36); }
        }
      }
    }
    .gnb { .p(0);
      .dim { opacity: 0.95; }
      .gnb-list { .w(1240); .p(0,40,0,60); .-box; .mh-c; overflow: hidden;
        &:after { .cnt; .f; .abs; .lt; .bgc(#000); opacity: 0.95; }
        .lang-ch, h1 { .hide; }
        ul { .p(20,0); .-t; .-b; .mt(465); .rel; z-index: 1;
          li { .fs(30); .mb(0); .ib; .tl; .w(162); .vat;
            > a { .w(110); .lh(36); .ib; .h(120); border-bottom:1px solid rgba(162,153,146,0.30); .-box; .vat; }
            .depth { .pl(0); .mt(45);
              a { .fs(20); .lh(36); .mb(15); }
            }
          }
        }
        .close { .wh(38,37); .rt(50,75); z-index: 1;
          &:after { .wh(38,37); .rt; }
        }
      }
    }
  }
}
</style>
