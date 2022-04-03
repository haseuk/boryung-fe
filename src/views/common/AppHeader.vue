<template>
  <div app-header>
    <header>
      <div class="h-inner">
        <a href="/" class="logo">BORYUNG</a>
        <a class="menu" @click="gnb = true">메뉴열기</a>
        <div class="lang-ch">
          <a class="eng-lang">ENG</a>
          <a class="kr-lang">KR</a>
        </div>
      </div>
    </header>
    <transition name="fade">
      <div class="gnb" v-if="gnb">
        <div class="dim"></div>
        <div class="gnb-list">
          <div class="lang-ch">
            <a class="eng-lang">ENG</a>
            <a class="kr-lang">KR</a>
          </div>
          <h1>BORYUNG</h1>
          <ul>
            <li><a>CEO<br class="web"> Letter</a>
              <div class="depth">
                <RouterLink to="ceo">김정균 대표이사</RouterLink>
                <RouterLink to="ceo">장두현 대표이사</RouterLink>
              </div>
            </li>
            <li><RouterLink to="our-mission">Our<br class="web"> Mission</RouterLink></li>
            <li><RouterLink to="our-history">Our<br class="web"> History</RouterLink></li>
            <li><a>Reports</a>
              <div class="depth">
                <RouterLink to="reports">연차보고서</RouterLink>
                <RouterLink to="reports">감사보고서</RouterLink>
                <RouterLink to="reports">IR</RouterLink>
              </div>
            </li>
            <li><RouterLink to="news">News</RouterLink></li>
            <li><a>Care In<br class="web"> Space</a>
              <div class="depth">
                <RouterLink to="care">Intro</RouterLink>
                <RouterLink to="care">CIS Challenge</RouterLink>
              </div>
            </li>
            <li><RouterLink to="link">Link to<br class="web"> Sub. Co.</RouterLink></li>
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
  mounted() {
  }
};
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[app-header] { .fs(0);
  .web { .hide; }
  header { .rel; z-index: 20;
    .h-inner { .rel; .h(80);
      .logo { .wh(207,31); .contain('/images/mo/logo.png'); .ib; .abs; .lb(69,0); }
      .menu { .wh(110,80); .abs; .rt; .pointer;
        &:after { .cnt; .wh(60,24); .contain('/images/mo/ham.png'); .abs; .lb; pointer-events: none; }
      }
      .lang-ch { .abs; .rt(129,45);
        a { .fs(30); color:#a29992; .medium; }
      }
    }
  }
  .gnb { .abs; .lt; .pl(33%); .-box; .f; z-index: 30;
    .dim { .fix; .f; .lt; .bgc(#000); opacity: 0.85; }
    .gnb-list { .abs; .lt; .f; .bgc(#fff); .rel; z-index: 1; .p(42,66,0,70); .-box; .tl;
      .lang-ch { .abs; .rt(122,45);
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
      .close { .wh(104,80); .abs; .rt;
        &:after { .cnt; .wh(38,38); .contain('/images/mo/x.png'); .abs; .rt(66,42); pointer-events: none; }
      }
    }
  }
}
@media screen and(min-width:1200px) {
  [app-header] {
    .web { .ib; }
    header { .h(109px);
      .h-inner { .hf; .max-w(1200px); .mh-c;
        .logo { .wh(207px,31px); .lb(60px,0); }
        .menu { .wh(60px,109px);
          &:after { .wh(60px,24px); }
        }
        .lang-ch { .abs; .rt(85px,76px);
          a { .fs(30px); .lh(36px); }
        }
      }
    }
    .gnb { .p(0);
      .dim { opacity: 1; }
      .gnb-list { .wh(1200px,100%); .mh-c; .bgc(#000); .p(0); overflow: hidden;
        .lang-ch, h1 { .hide; }
        ul { .p(20px,0); .-t; .-b; .mt(465px);
          li { .fs(30px); .mb(0); .ib; .tl; .w(162px); .vat;
            > a { .w(110px); .lh(36px); .ib; .h(120px); border-bottom:1px solid rgba(162,153,146,0.30); .-box; .vat; }
            .depth { .pl(0); .mt(45px);
              a { .fs(20px); .lh(36px); .mb(15px); }
            }
          }
        }
        .close { .wh(38px,37px); .rt(10px,75px);
          &:after { .wh(38px,37px); .rt; }
        }
      }
    }
  }
}
</style>
