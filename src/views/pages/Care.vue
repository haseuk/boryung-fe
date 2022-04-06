<template>
  <div care :class="{ready}">
    <SelectContent title="Care In Space" list1="Intro" list2="CIS Challenge"/>
    <div class="cont cont1" v-if="cont1">
      <div class="vision">
        <p class="bg-tit">Vision</p>
        <p class="tit">We <b>Care</b><br class="mo"> More Humanity<br> <b>in Space</b></p>
        <ul class="vision-ul">
          <li>우주 환경에서 발생할 수 있는<br class="mo"> 다양한 Healthcare 관점의 문제 해결에 대한 접근</li>
          <li>기존 Human Health 관련<br class="mo"> 미 연구 분야에 대한 확장 및 투자</li>
          <li>다양한 건강 상태의 사람들을<br class="mo"> 더 많이 우주에 보낼 수 있게 하는 연구</li>
        </ul>
      </div>
      <ul class="divs">
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
    </div>
    <div class="cont cont2" v-else>
      <p class="tit">국제CIS챌린지란?</p>
      <p class="txt">
        국제CIS챌린지 (Care in Space Challenge)는 최초의 제약/헬스케어 분야 스타트업 엑셀러레이터 프로그램(accelerator program)으로서 현재 우주에서 실현가능한 사업분야 확장을 목표로 삼고 있으며, 제약, 헬스케어 업계와 우주산업 사이의 간극 메우기 위해 노력할 것입니다. 이를 위해 보령, 액시엄 스페이스 (Axiom Space), 스타버스트(Starburst)는 전략적으로 협력하며, 유망 기업가와 스타트업 대상으로 13주동안 진행될 엑셀러레이터 프로그램 참여기회와 10만달러의 투자금을 제공합니다. 이를 통해 헬스케어 기업의 제조 역량을 액시엄의 우주선 관련 미션에 활용하는데 기여할 것입니다.
        이 CIS챌린지는 사업을 성공적으로 출범시켜 성장하는데 필요한 기술, 인적 네트워크, 전문지식을 지원/양성하기 위해 고안되었습니다. 강연, 피칭 훈련, 네트워킹 기회, 특별 이벤트 등이 제공될 것이며, 끝으로 데모데이(demo day)가 열리며 대단원의 막을 내리게 됩니다. 프로그램에 선발된 각 팀은 맞춤교육을 받고, 산업리더, 각 분야 전문가, 잠재적 파트너사, 고객, 그리고 투자자들과 연을 맺게 됩니다. CIS챌린지는 각 팀들의 프로젝트 마일스톤 설정, 기술성숙도(TRL)증진, 유망시장이 필요로 하는 제품 발굴(PMF), 고객관관리, 차기 투자 유치 등을 지원하고, 프로그램 참여 팀들은 스타버스트의 대규모 글로벌 네트워크 접근성을 얻게 되고, 스타버스트, 보령, 액시엄의 운영진, 저명한 항공우주 기업가, 투자자, 기업파트너, 학술연구가 등으로 구성된 우주산업 생태계의 일원이 될 것입니다.
      </p>
      <ul class="cont2-ul">
        <li>
          <b>Accelerator program</b>
          스타트업을 위한 창업기획 / 지원프로그램
        </li>
        <li>
          <b>Axiom Space</b>
          미국 우주탐사 / 관광 스타트업(민간 우주정거장건설예정)
        </li>
        <li>
          <b>Starburst</b>
          글로벌 항공우주 스타트업 엑셀러레이터
        </li>
        <li>
          <b>Demo day</b>
          스타트업홍보, 투자유치를 위한 행사
        </li>
        <li>
          <b>Project milestone</b>
          프로젝트 중 중요 이정표 수립
        </li>
        <li>
          <b>Technology Readiness Level</b>
          (TRL, 기술성숙도)
        </li>
        <li>
          <b>Product-Market Fit</b>
          (PMF, 제품시장적합성)
        </li>
      </ul>
      <div class="care-logo">
        <img src="/images/mo/care-logo.png" alt="">
      </div>
    </div>
    <span class="v-bg"></span>
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
      cont1: true,
      cont2: false
    }
  },
  mounted() {
    setTimeout(() =>{ this.ready = false },500)
  },
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[care] { .fs(0); .p(0,70); .-box; .mt(140); .rel;
  .mo { .ib; }
  &:after { .cnt; .wh(100vw,147.87vw); background: url('/public/images/mo/care-bg1.png') center top; .cover; .abs; .lt(0,-280); z-index: -1; }
  .cont { .tl;
    &.cont1 { .tc;
      .vision { .mb(180);
        .bg-tit { .fs(60); .lh(72); .bold; color:#e3d7cb; .ls(-0.05em); .mb(36); }
        .tit { .fs(72); .lh(74); .light; .ls(-0.05em); .mb(100);
          b { .bold; }
        }
        .vision-ul { .mt(75);
          li { .fs(30); .semi-bold; .ls(-0.05em); .rel; .mb(40);
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
            .txt { .w(560); }
            .num { .fs(36); .lh(36);  color:#e3d7cb; .w(70); }
            .txt, .num { .tl; .ib; .vat; }
            > div { .pl(20); .-box;
              &:nth-of-type(1) { .mb(35); }
            }
          }

          &:nth-child(2) { .tl;
            .l-tit { .block; .mh-c; .tc; }
            > div { .w(650); .mh-c; .pl(20); .-box; }
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
                &:nth-of-type(1) { .lt(5,50%); .mt(-18%); .tl; }
                &:nth-of-type(2) { .rt(0,50%); .mt(-18%); .tr; }
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
      .txt { .fs(24); .lh(36); .ls(-0.05em); .medium; }
      .cont2-ul { .mt(60);
        li { .fs(24); .medium; .ls(-0.05em); .mb(35);
          b { .fs(30); .lh(42); .bold; .block; }
        }
      }
      .care-logo { .wh(610,100); .mh-c; .mt(80); .bgc(#000); .p(28,119); .-box;
        img { .wh(372,45); }
      }
    }
  }
  .v-bg { .hide; }


  h2, .select-box, .cont .bg-tit, .cont .tit, .vision-ul, .divs li, .cont2 .tit, .cont2 .txt, .cont2-ul, .care-logo, .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  .select-box { transition-delay: 0.8s; }
  .cont .bg-tit { transition-delay: 1.6s; }
  .cont .tit { transition-delay: 2.0s; }
  .vision-ul { transition-delay: 2.4s; }
  .divs li {
    &:nth-child(1) { transition-delay: 2.8s; }
    &:nth-child(2) { transition-delay: 3.2s; }
    &:nth-child(3) { transition-delay: 3.6s; }
    &:nth-child(4) { transition-delay: 4.0s; }
  }
  .v-bg { transform: translateX(0); transition-delay: 3.8s; }

  .cont2 .tit { transition-delay: 1.6s; }
  .cont2 .txt { transition-delay: 2.0s; }
  .cont2-ul { transition-delay: 2.4s; }
  .care-logo { transition-delay: 2.8s; }
  &.ready {
    h2, .select-box, .cont .bg-tit, .cont .tit, ul, .divs li, .cont2 .tit, .cont2 .txt, .cont2-ul, .care-logo { opacity:0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
}
@media screen and(min-width: 1240px) {
  [care] { .max-w(1240); .p(180,40,180,60); .-box; .mh-c; .mt(0);
    [select-cont] { .pl(0);
      .select-box { .r(0); }
    }
    .mo { .hide; }
    &:after { .h(984); background: url('/public/images/pc/care-bg1.png') center top; .lt(50%,-287); .ml(-50vw); }
    .cont { .mt(20);
      &.cont1 {
        .vision { .mb(120);
          .bg-tit { .mb(14); }
          .tit { .fs(60); .lh(72); .mb(100); }
          ul { .mt(100);
            li { .fs(24); .mb(38);
              &:after { .cnt; .wh(22,22); .m(-10,0,0,-11); }
            }
          }
        }
        .divs {
          li { .pb(135);
            .l-tit { .w(250); .mb(30); }
            .txt { .fs(20); }

            &:nth-child(2) {
              .date, .txt { .fs(20); }
            }
            &:nth-child(4) {
              .network { .max-w(612); .mt(45);
                p {
                  &:nth-of-type(1) { .mt(-110); }
                  &:nth-of-type(2) { .mt(-110); }
                  &:nth-of-type(3) { .mt(50); }
                  &:nth-of-type(4) { .mt(50); }
                }
              }
            }
          }
        }
      }
      &.cont2 { .w(860); .pl(60); .-box;
        .tit { .fs(36); .lh(50); .mb(15); }
        .txt { .fs(18); .lh(30); }
        .cont2-ul { .mt(30);
          li { .fs(18); .lh(32); .mb(5);
            b { .fs(24); .lh(32); .ib; .mr(10); }
          }
        }
        .care-logo { .mt(40); }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; }
  }
}
</style>