<template>
  <div app-header>
    <header>
      <div class="h-inner">
        <LngLink to="/" class="logo">BORYUNG</LngLink>
        <a class="menu" @click="gnb = true">메뉴열기</a>
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
                <LngLink to="ceo">{{ $t('gnb.ceo.kim') }}</LngLink>
                <LngLink to="ceo">{{ $t('gnb.ceo.chang') }}</LngLink>
              </div>
            </li>
            <li><LngLink to="our-mission">Our<br class="web"> Mission</LngLink></li>
            <li><LngLink to="our-history">Our<br class="web"> History</LngLink></li>
            <li><LngLink to="reports">Reports</LngLink>
              <div class="depth">
                <LngLink to="reports">{{ $t('gnb.reports.cont1') }}</LngLink>
                <LngLink to="reports">{{ $t('gnb.reports.cont2') }}</LngLink>
                <LngLink to="reports">IR</LngLink>
              </div>
            </li>
            <li><LngLink to="news">News</LngLink></li>
            <li><LngLink to="care">Care In<br class="web"> Space</LngLink>
              <div class="depth">
                <LngLink to="care">Intro</LngLink>
                <LngLink to="care">CIS Challenge</LngLink>
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
      this.$router.push({ params: { lang } });
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
        &:after { .cnt; .wh(60,24); .contain('/images/mo/ham.png'); .abs; .lb; pointer-events: none; }
      }
      .lang-ch { .abs; .rt(129,49);
        a { .fs(30); color:#a29992; .medium; }
      }
    }
  }
  .gnb { .abs; .lt; .pl(33%); .-box; .f; z-index: 30;
    .dim { .fix; .f; .lt; .bgc(#000); opacity: 0.85; }
    .gnb-list { .abs; .lt; .f; .bgc(#fff); .rel; z-index: 1; .p(42,66,0,70); .-box; .tl;
      .lang-ch { .abs; .rt(129,45);
        a { .fs(30); color:#a29992; .medium; }
      }
      h1 { .wh(367,56); .contain('/images/mo/boryung-s.png'); .mt(313); }
      ul { .p(74,0); .-box; .-t(#afa89e); .-b(#afa89e); .mt(100);
        li { .fs(46); color:#6e675f; .light; .ls(-0.05em); .mb(14);
          .depth { .pl(38); .-box; .mt(5);
            a { .fs(30); .lh(48); .medium; .block; }
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
      .dim { opacity: 1; }
      .gnb-list { .w(1240); .p(0,40,0,60); .-box; .mh-c; .bgc(#000); overflow: hidden;
        .lang-ch, h1 { .hide; }
        ul { .p(20,0); .-t; .-b; .mt(465);
          li { .fs(30); .mb(0); .ib; .tl; .w(162); .vat;
            > a { .w(110); .lh(36); .ib; .h(120); border-bottom:1px solid rgba(162,153,146,0.30); .-box; .vat; }
            .depth { .pl(0); .mt(45);
              a { .fs(20); .lh(36); .mb(15); }
            }
          }
        }
        .close { .wh(38,37); .rt(50,75);
          &:after { .wh(38,37); .rt; }
        }
      }
    }
  }
}
</style>
