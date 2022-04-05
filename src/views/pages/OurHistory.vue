<template>
  <div history :class="{ready}">
    <h2>Our History.</h2>
    <ul>
      <li class="tit"><p>2020 ~</p></li>
      <li><p class="date">2022. 04</p><p class="txt">주식회사 보령(BORYUNG Corp.)으로 사명 변경(New CI)</p></li>
      <li><p class="date">2021. 12</p><p class="txt">카나브 패밀리 연매출 1,000억원 돌파</p></li>
      <li class="b"><p class="date">2021. 12</p><p class="txt">영업이익 500억원 돌파</p></li>
      <li><p class="date">2021. 12</p><p class="txt">항암제 개발 전문기업 리큐온(Recuon) 설립</p></li>
      <li><p class="date">2021. 10</p><p class="txt">美 일라이릴리社 조현병치료제 'Zyprexa' (한국권리) 인수(LBA #2)</p></li>
      <li><p class="date">2021. 08</p><p class="txt">관계사 '바이젠셀' 코스닥 상장</p></li>
      <li><p class="date">2021. 08</p><p class="txt">中 'Sinopharm(國藥集團)’과 약 1,000억원 규모 ‘겔포스’ 공급계약 체결</p></li>
      <li><p class="date">2020. 11</p><p class="txt">예산캠퍼스 항암제 생산라인 GMP 인증</p></li>
      <li class="b"><p class="date">2020. 11</p><p class="txt">보령제약 시가총액 1조원 돌파</p></li>
      <li><p class="date">2020. 07</p><p class="txt">보령컨슈머헬스케어 자회사(100%) 편입</p></li>
      <li><p class="date">2020. 05</p><p class="txt">美 일라이릴리社 항암제 'Gemzar' (한국권리) 인수(LBA #1)</p></li>
      <li><p class="date">2020. 01</p><p class="txt">미국 법인(BORYUNG INC.) 설립</p></li>

      <li class="tit"><p>2001 ~ 2019</p></li>
      <li class="b"><p class="date">2019. 12</p><p class="txt">매출 5,000억원 달성</p></li>
      <li><p class="date">2019. 08</p><p class="txt">표적항암신약 ‘BR2002’ 미국임상 1상 IND 승인</p></li>
      <li><p class="date">2019. 04</p><p class="txt">예산 생산단지(예산 캠퍼스) 준공식</p></li>
      <li><p class="date">2017. 10</p><p class="txt">창업60주년</p></li>
      <li><p class="date">2017. 04</p><p class="txt">보령제약, 중국 법인 설립</p></li>
      <li><p class="date">2017. 03</p><p class="txt">예산 신공장 착공</p></li>
      <li><p class="date">2016. 09</p><p class="txt">제26차 세계고혈압학회2016 서울' 참가, 5개 단독 심포지엄</p></li>
      <li><p class="date">2014. 12</p><p class="txt">카나브 '세계일류상품' 선정(산업통상자원부, 코트라)</p></li>
      <li><p class="date">2011. 03</p><p class="txt">국내 최초 고혈압 신약 카나브 발매</p></li>
      <li><p class="date">2010. 12</p><p class="txt">보령제약 3,000억원 매출 달성</p></li>
      <li><p class="date">2007. 01</p><p class="txt">보령 창업 50주년</p></li>
      <li><p class="date">2005. 11</p><p class="txt">보령의사수필문학상 제정</p></li>
      <li><p class="date">2002. 03</p><p class="txt">보령암학술상 제정</p></li>

      <li class="tit"><p>1957 ~ 2000</p></li>
      <li class="b"><p class="date">2000. 12</p><p class="txt">보령제약 1,000억원 매출 달성</p></li>
      <li><p class="date">1988. 10</p><p class="txt">기업 공개(주식상장)</p></li>
      <li><p class="date">1988. 06</p><p class="txt">안산공장 준공</p></li>
      <li><p class="date">1985. 03</p><p class="txt">보령의료봉사상 제정</p></li>
      <li><p class="date">1980. 02</p><p class="txt">보령중앙연구소 신설</p></li>
      <li><p class="date">1963. 11</p><p class="txt">보령제약주식회사 창립(동영제약 인수)</p></li>
      <li><p class="date">1957. 10</p><p class="txt">종로5가 보령약국 창업</p></li>
    </ul>
    <span class="v-bg"></span>
  </div>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      ready: true,
    };
  },
  mounted() {
    setTimeout(() =>{ this.ready = false },500)
  },
};
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[history] { .fs(0); .p(0,70); .-box; .mt(140);
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(75); }
  ul {
    &:last-child { .mb(0); }
    li { .mb(19); .wf;
      &:last-child { .mb(0); }
      &.tit { .mt(80);
        p { .fs(72); .lh(100); .medium; color:#e3d7cb; .ls(-0.05em); }
      }
      p { .fs(20); .lh(29); color:#2d2d2f; .ls(-0.05em); .ib; .medium; .vat;
        &.date { .w(18%); }
        &.txt { .w(82%); }
      }
      &.b p { .bold;
        &.txt { .fs(24); }
      }
    }
  }
  h2, ul li, .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-in-out; }
  ul li { transition: opacity 0.5s, transform 0.8s; }
  @li: 35;
  .loop(@i) when (@i > 0){
    ul li:nth-child(@{i}) {
      transition-delay:1s + (0.1 * @i);
    }
    .loop(@i - 1);
  }
  .loop(@li);
  .v-bg { transition-delay: 3s; }
  &.ready {
    h2 { opacity:0; transform: translateY(100%); }
    ul li.tit { opacity:0; transform: translateY(80%); }
    ul li { opacity:0; transform: translateY(100%); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
  .v-bg { .hide; }
}
@media screen and(min-width: 1240px) {
  [history] { .max-w(1240); .p(180,40,180,60); .-box; .mh-c; .mt(0);
    h2 { .lh(80); .mb(105); }
    ul { .pl(150); .-box;
      li {
        &.tit p { .lh(75); }
        p {
          &.date { .w(115); }
          &.txt { width:auto; }

        }
        &.b p {
          &.txt { .fs(24); }
        }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; }
  }
}
</style>
