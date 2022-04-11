<template>
  <div care :class="{ready, refresh}">
    <SelectContent title="Care In Space." :list="selectList" :active="active" @select="select"/>
    <div class="cont cont1" v-if="active === 'intro'">
      <div class="vision">
        <p class="bg-tit">Vision</p>
        <p class="tit">We <b>Care</b><br class="mo"> More Humanity<br> <b>in Space</b></p>
        <ul class="vision-ul c-ko">
          <li>우주 환경에서 발생할 수 있는<br class="mo"> 다양한 Healthcare 관점의 문제 해결에 대한 접근</li>
          <li>기존 Human Health 관련<br class="mo"> 미 연구 분야에 대한 확장 및 투자</li>
          <li>다양한 건강 상태의 사람들을<br class="mo"> 더 많이 우주에 보낼 수 있게 하는 연구</li>
        </ul>
        <ul class="vision-ul c-en">
          <li>Approaches toward prospective various healthcare issues in space environment</li>
          <li>Extension of scope of untapped human<br class="mo"> health-related research areas and<br class="mo"> investment in them</li>
          <li>Studies aimed to send more people in various<br class="mo"> health conditions to outer space</li>
        </ul>
      </div>
      <ul class="divs c-ko">
        <li>
          <p class="l-tit">Mission</p>
          <div>
            <p class="num">01.</p><p class="txt">우주 산업 내 다양한 기회 탐색을 통한 신규 아이디어 발굴과 Space sector 내에서의 투자 대상 탐색</p>
          </div>
          <div>
            <p class="num">02.</p><p class="txt">향후 우주 산업 생태계 속에서 헬스케어 관련 연구 및 사업, 투자에 대한 주도적 역할을 위한 선도적 포지셔닝</p>
          </div>
        </li>
        <li>
          <p class="l-tit">History</p>
          <div>
            <p class="date">2020년 10월</p><p class="txt"> CIS TF Kick off</p>
          </div>
          <div>
            <p class="date">2021년 1~12월</p><p class="txt"> 국내외 항공 우주 관련 기관 네트워킹 및 파트너십 진행</p>
          </div>
          <div>
            <p class="date">2022년 2월</p><p class="txt"> Axiom Space 파트너십 체결 및 투자 집행</p>
          </div>
          <div>
            <p class="date">2022년 4월</p><p class="txt"> CIS Challenge 개최</p>
          </div>
        </li>
        <li>
          <p class="l-tit">Partner</p>
          <p class="txt">Axiom Space / Starburst</p>
        </li>
        <li>
          <p class="l-tit">Network</p>
          <p class="txt">KARI(한국항공우주연구원) / STEPI(과학기술정책연구원) / NASA(미국 항공우주국)</p>
          <div class="network">
            <img src="/images/mo/network.png" alt="">
            <p>우주기관</p>
            <p>스타트업</p>
            <p>산학</p>
            <p>전문 항공 우주 사업자</p>
          </div>
        </li>
      </ul>

      <ul class="divs c-en">
        <li>
          <p class="l-tit">Mission</p>
          <div>
            <p class="num">01.</p><p class="txt">Discovery of new ideas by searching for various business opportunities in space and find new investment targets there</p>
          </div>
          <div>
            <p class="num">02.</p><p class="txt">Preemptive positioning to play leading roles in healthcare-related research, investments and R&D projects in space ecosystem going forward</p>
          </div>
        </li>
        <li>
          <p class="l-tit">History</p>
          <div>
            <p class="date">2020. Oct.</p><p class="txt"> “Care In Space (CIS)” task force kicked off</p>
          </div>
          <div>
            <p class="date">2021. Jan.-Dec.</p><p class="txt"> Networking and partnership forged with aerospace partners at home and abroad</p>
          </div>
          <div>
            <p class="date">2022. Feb.</p><p class="txt"> Axiom Space partnership signed and investment executed</p>
          </div>
          <div>
            <p class="date">2022. Apr.</p><p class="txt"> Opening of CIS Challenge</p>
          </div>
        </li>
        <li>
          <p class="l-tit">Partner</p>
          <p class="txt">Axiom Space / Starburst</p>
        </li>
        <li>
          <p class="l-tit">Network</p>
          <p class="txt">Korea Aerospace Research Institute,<br class="mo"> Science and Technology Policy Institute, NASA</p>
          <div class="network">
            <img src="/images/mo/network.png" alt="">
            <p>Space-related institutes</p>
            <p>Startups</p>
            <p>Academic researchers</p>
            <p>Established aerospace<br> business companies </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="cont cont2" v-if="active === 'cis'">
      <div class="c-ko">
        <p class="tit">CIS Challenge.</p>
        <div class="txt">
          <p class="top">개요</p>
          <p>CIS Challenge는 최초의 제약/헬스케어 분야 스타트업 엑셀러레이터 프로그램으로서 현재 우주에서 실현 가능한 사업 분야 확장을 목표로 삼고 있습니다.</p>
          <p>최근 기술의 발달로 우주 탐사 비용이 감소하면서 제약/헬스케어 분야에서 무중력의 이점을 활용할 수 있는 기회들이 열리고 있습니다. 또한 가까운 미래에 행성간 여행을 포함한 스페이스 투어가 현실화되고 이를 뒷받침할 민간 우주 관련 기업들이 대거 출현할 것으로 예상됩니다. 이에 따라 우주에서의 인간의 활동이 더욱 활발해질 것이고 이때 자연스럽게 발생할 수 있는 다양한 건강 상태들에 대해 선제적으로 고민해 볼 시점입니다.</p>
          <p>CIS Challenge를 통한 창의적이고 기술력 있는 우주 스타트업들의 참여로 이 모든 문제들에 대한 해법을 모색하려고 합니다.</p>
        </div>
        <div class="txt">
          <p class="top">진행 절차</p>
          <p class="t-tit"><i></i><b>참가자 선정</b></p>
          <div class="step">
            <span>신청서 제출</span>
            <span>서류 심사</span>
            <span>프레젠테이션</span>
            <span>10팀 선정</span>
          </div>
          <p class="sub"><i></i><b>Starburst 엑셀러레이터 프로그램 운영(13주)</b></p>
          <p>투자금 10만달러 부여, 프로젝트 마일스톤 설정, 기술력 및 제품 발굴을 위한 맞춤 교육, 고객관리,<br class="web"> 차기 투자유치 등 지원</p>
          <p class="sub"><i></i><b>CIS 데모데이(2022년 12월 생중계)</b></p>
        </div>
        <div class="txt">
          <p class="top t-tit">일정</p>
          <p><b>2022년 4월 18일부터 7월18일까지(13주간)</b></p>
        </div>
        <div class="txt">
          <p class="top t-tit">파트너</p>
          <p><em>(주)보령</em>이 주관하며 우주 탐사 / 관광 전문기업 <b>Axiom Space</b>,<br class="web"> 글로벌 항공우주 스타트업 엑셀러레이터 <b>Starburst</b>가 함께 합니다. </p>
        </div>
      </div>
      <div class="c-en">
        <p class="tit">WHAT IS THE INTERNATIONAL<br class="web"> CARE IN SPACE CHALLENGE?</p>
        <p class="txt txt1">The International Care In Space (CIS) Challenge is a first-of-its-kind startup accelerator program that will challenge the status quo of what is currently possible in space. The program will seek to bridge the gap between the pharmaceutical industry, healthcare broadly, and space. Boryung, Axiom Space, and Starburst are strategically coming together to offer aspiring entrepreneurs and participating startup companies the opportunity to receive admission into a 13-week accelerator program along with a $100,000 equity investment that will help bring healthcare manufacturing capabilities into space aboard an Axiom Spacecraft.<br><br></p>
        <p class="txt txt2">The program is designed to equip companies with the skills, connections, and expertise they need to successfully develop and grow their businesses. The program is composed of lectures, workshops, pitch practice sessions, networking opportunities, and special events, culminating with a demo day. Each team selected for the program will receive personalized instruction and engage with industry leaders, subject matter experts, potential partners, customers, and investors. CIS will helps teams set milestones, advance Technology Readiness Level, define product-market fit, build customer relationships, and secure their next round of funding. Teams will have access to Starburst’s extensive global network and become part of an ecosystem that includes Starburst, Boryung, and Axiom's executive teams, established aerospace entrepreneurs, investors, corporate partners, customers, academic researchers, and more</p>
      </div>
      <div class="care-logo c-en">
        <a href="https://asher735.wixsite.com/cis-20222" target="_blank">
          <img src="/images/mo/care-logo.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SelectContent from "@/views/components/SelectContent";
export default {
  name: "ceo",
  components: {SelectContent},
  data() {
    return {
      ready: true,
      refresh: true,
    }
  },
  mounted() {
    setTimeout(() =>{ this.ready = false },500);
    setTimeout(() => { this.refresh = false },1600);
  },
  computed: {
    active() {
      return this.$route.params.care
    },
    selectList() {
      return [
        {key: 'intro', label: this.$t('gnb.care.intro')},
        {key: 'cis', label: this.$t('gnb.care.cis')}
      ]
    }
  },
  watch: {
    active() {
      this.refresh = true;
      setTimeout(() => { this.refresh = false },200)
    }
  },
  methods: {
    select(care) {
      if (this.active === care) return;
      this.$router.push({ params: { care } })
    }
  }
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[care] { .fs(0); .p(0,70); .rel; .mt(140); .pb(200); .-box;
  .mo { .ib; }
  .web { .hide; }
  &:after { .cnt; .wh(100vw,147.87vw); background: url('/images/mo/care-bg1.png') center top; .cover; .abs; .lt(0,-280); z-index: -1; }
  .cont { .tl;
    &.cont1 { .tc;
      .vision { .mb(180);
        .bg-tit { .fs(60); .lh(72); .bold; color:#e3d7cb; .ls(-0.05em); .mb(36); }
        .tit { .fs(72); .lh(74); .light; .ls(-0.05em); .mb(100);
          b { .bold; }
        }
        .vision-ul { .mt(75);
          li { .fs(30); .semi-bold; .ls(-0.06em); .rel; .mb(40); .nowrap;
            &:after { .cnt; .wh(22,22); .ls(-0.05em); .bgc(#e3d7cb); .br(50%); .abs; .lt(50%,-25); .ml(-11); }
          }
        }
      }
      .divs {
        li { .pb(105); .-box;
          .l-tit { .fs(48); .semi-bold; .ls(-0.05em); .w(260); .bgc(#fff); .ib; .rel; .mb(54);
            &:after { .cnt; .bgc(#e3d7cb); .wh(650,1); .abs; .lt(50%,50%); .ml(-325); z-index: -1; }
          }
          .txt { .fs(24); .ls(-0.05em); .lh(30); }

          &:nth-child(1) {
            .txt { .w(530); }
            .num { .fs(36); .lh(36);  color:#e3d7cb; .w(60); }
            .txt, .num { .tl; .ib; .vat; }
            > div { .pl(20); .-box;
              &:nth-of-type(1) { .mb(35); }
            }
          }

          &:nth-child(2) { .tl;
            .l-tit { .block; .mh-c; .tc; }
            > div { .w(650); .mh-c; .pl(20); .-box; .mb(5); }
            .date, .txt { .fs(24); .lh(30); .ib; .vat; .ls(-0.05em); }
            .date { .w(170); }
            .txt { .w(460); .keep-all; }
          }
          &:nth-child(3) {
            .txt { .fs(36); }
          }
          &:nth-child(4) {
            .txt { .lh(36); .keep-all; }
            .network { .wf; .max-w(622); .mh-c; .mt(80); .rel;
              img { .wf; }
              p { .fs(20); .lh(28); .medium; color:#a29992; .abs; .ls(-0.05em);
                &:nth-of-type(1) { .lt(5,50%); .mt(-19%); .tl; }
                &:nth-of-type(2) { .rt(0,50%); .mt(-19%); .tr; }
                &:nth-of-type(3) { .lt(5,50%); .mt(8%); .tl; }
                &:nth-of-type(4) { .rt(0,50%); .mt(8%); .tr; }
              }
            }
          }
        }
      }
    }
    &.cont2 { .tl;
      .tit { .fs(48); .lh(60); .medium; .ls(-0.05em); .mb(45); }
      .txt { .mb(50);
        p { .fs(24); .lh(36); .ls(-0.05em); .medium;
          &.top { .lh(28); .-l(#2d2d2f); .-r(#2d2d2f); .p(0,20); .-box; .ib; .mb(10); }
          i { .wh(7,7); .br(50%); .bgc(#e3d7cb); .ib; .vam; .mr(10); }
          &.sub { .mt(30); }
          em { .bold; }
        }
        .step {
          span { .fs(18); color:#2d2d2f; .bold; .ib; .p(8,12); .-a(#e3d7cb); .-box; .mr(23); .rel;
            &:after { .cnt; .wh(14,23); .contain('/images/mo/arrow-r.png'); .abs; .rt(-22,10); }
            &:last-child { .mr(0);
              &:after { .hide; }
            }
          }
        }
      }
      .cont2-ul { .mt(60);
        li { .fs(24); .medium; .ls(-0.05em); .mb(35);
          b { .fs(30); .lh(42); .bold; .block; }
        }
      }
      .care-logo { .wh(610,100); .block; .mt(80); .bgc(#000); .rel;
        a { .wh(610,100); .ib; .pointer; .abs; .lt; }
        img { .wh(372,45); .abs; .lt(50%,50%); transform: translate(-50%,-50%); }
      }
      .c-en .txt { .fs(24); .medium; }
    }
  }


  h2, .select-box, .cont .bg-tit, .cont .tit, .cont2 .txt, .vision-ul, .divs li, .cont2 .tit, .cont2 .txt, .cont2-ul, .care-logo { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  .select-box { transition-delay: 0.8s; }
  .cont .bg-tit { transition-delay: 0.4s; }
  .cont .tit { transition-delay: 0.7s; }
  .vision-ul { transition-delay: 1.0s; }
  .divs li {
    &:nth-child(1) { transition-delay: 1.3s; }
    &:nth-child(2) { transition-delay: 1.6s; }
    &:nth-child(3) { transition-delay: 1.9s; }
    &:nth-child(4) { transition-delay: 2.1s; }
  }
  .cont2-ul { transition-delay: 1.3s; }
  .care-logo { transition-delay: 1.6s; }


  .cont2 {
    .tit {transition-delay: 0.4s; }
    .txt {
      &:nth-of-type(1) { transition-delay: 0.7s; }
      &:nth-of-type(2) { transition-delay: 1.0s; }
      &:nth-of-type(3) { transition-delay: 1.3s; }
      &:nth-of-type(4) { transition-delay: 1.6s; }
    }
  }

  &.ready {
    h2, .select-box, .cont .bg-tit, .cont .tit, ul, .divs li, .cont2 .tit, .cont2 .txt, .cont2-ul, .care-logo { opacity:0; transform: translateY(100px); }
  }
  &.refresh {
    .cont .bg-tit, .cont .tit, ul, .divs li, .cont2 .tit, .cont2 .txt, .cont2-ul, .care-logo { transition: opacity 0s, transform 0s; transition-delay: 0s; opacity:0; transform: translateY(100px); }
  }
}

#app {
  &.ko .cont .divs {
    &.c-ko { .block; }
    &.c-en { .hide; }
  }
  &.en [care] { .p(0,50,140);
    [select-cont] { .pl(20); .-box; }
    .cont .divs {
      &.c-ko { .hide; }
      &.c-en { .block; }
    }
    .cont.cont1 .divs li {
      > div { .pl(0);  }
      &:nth-child(4) .network p:nth-of-type(4) { .mt(4%); }
    }
  }
}
@media screen and(min-width: 1240px) {
  [care] { .max-w(1240); .p(180,40,200,60)!important; .-box; .mh-c; .mt(0);
    [select-cont] { .pl(0);
      .select-box { .r(0); }
    }
    .mo { .hide; }
    .web { .ib; }
    &:after { .h(984); background: url('/images/pc/care-bg1.png') center top; .lt(50%,-109); .ml(-50vw); }
    .cont { .mt(20);
      &.cont1 {
        .vision { .mb(120);
          .bg-tit { .mb(14); }
          .tit { .fs(60); .lh(72); .mb(100); }
          .vision-ul { .mt(100);
            li { .fs(24); .mb(38);
              &:after { .cnt; .wh(22,22); .ml(-9); }
            }
          }
        }
        .divs {
          li { .pb(135);
            &:last-child { .pb(0); }
            .l-tit { .w(250); .mb(30); }
            .txt { .fs(20); }

            &:nth-child(2) {
              .date, .txt { .fs(20); }
            }
            &:nth-child(4) {
              .network { .max-w(612); .mt(45);
                p {
                  &:nth-of-type(1) { .mt(-120); }
                  &:nth-of-type(2) { .mt(-120); }
                  &:nth-of-type(3) { .mt(50); }
                  &:nth-of-type(4) { .mt(50); }
                }
              }
            }
          }
        }
      }
      &.cont2 {
        .tit { .fs(36); .lh(50); .mb(25); }
        .txt { .fs(18); .lh(22); .rel;
          p, .top { .fs(18); }
          p.top { .lh(22); }
          .step { .abs; .lt(130,40);
            span { .p(8,25); }
          }
          .t-tit + p { .abs; .lt(130,0); .mt(-5); }
        }
        .c-en .txt { .fs(18); .lh(30); .mb(0); }
        .cont2-ul { .mt(30);
          li { .fs(18); .lh(32); .mb(5);
            b { .fs(18); .lh(32); .ib; .mr(10); }
          }
        }
        .care-logo { .mt(40); }
      }
    }
  }
  #app {
    &.en [care] {
      [select-cont] { .pl(0); }
      .cont.cont1 .divs li { width:auto; .mh-c;
        > div { .pl(240); .tl;
          .txt { .w(670); }
        }
        .network { .pl(0); }
        &:nth-child(2) > div { width:auto;
          .txt { .w(730); }
        }
        &:nth-child(4) .network p:nth-of-type(4) { .mt(25); }
      }
    }
  }
}
</style>