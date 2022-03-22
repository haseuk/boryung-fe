<template>
  <div app-header>
    <header>
      <a href="/" class="logo">BORYUNG</a>
      <a class="menu">메뉴열기</a>
      <div class="lang-ch">
        <a class="eng-lang">ENG</a>
        <a class="kr-lang">KR</a>
      </div>
    </header>
    <div class="gnb">
      <div class="dim"></div>
      <div class="gnb-list">
        <div class="lang-ch">
          <a class="eng-lang">ENG</a>
          <a class="kr-lang">KR</a>
        </div>
        <h1>BORYUNG</h1>
        <ul>
          <li><a>CEO Letter</a>
            <div class="depth">
              <a >김정균 대표이사</a>
              <a >장두현 대표이사</a>
            </div>
          </li>
          <li><a>About Us</a></li>
          <li><a>Reports</a></li>
          <li><a>News Release</a></li>
          <li><a>Care In Space</a></li>
          <li><a>Link to Sub. Co</a></li>
        </ul>
        <a class="close">닫기</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  data() {
    return {}
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
  header { .h(80); .rel; z-index: 20;
    .logo { .wh(207,31); .contain('/images/mo/logo.png'); .ib; .abs; .lb(69,0); }
    .menu { .wh(110,80); .abs; .rt;
      &:after { .cnt; .wh(60,24); .contain('/images/mo/ham.png'); .abs; .lb; pointer-events: none; }
    }
    .lang-ch { .abs; .rt(129,45);
      a { .fs(30); color:#a29992; .medium; }
    }
  }
  .gnb { .fix; .lt; .f; z-index: 1; .l(100vw); opacity: 0; transition: left 0.3s, opacity 0.1s;
    .dim { .fix; .f; .lt; .bgc(#000); opacity: 0.85; }
    .gnb-list { .wh(67%,100%); .bgc(#fff); .rel; z-index: 1; .p(42,66,0,70); .-box; .tl;
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
    &.on { opacity:1; .l(33%); z-index: 30; }
  }

}
</style>
