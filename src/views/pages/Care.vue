<template>
  <div care :class="{ready, refresh}">
    <SelectContent title="Care In Space." :list="selectList" :active="active" @select="select"/>
    <div class="cont cont1" v-if="active === 'intro'">
      <div class="c-ko">
        <div class="vision">
          <p class="bg-tit">Can we send sick people<br class="mo"> to space?</p>
          <p class="tit">아픈 사람은 우주로 갈 수 있나요?</p>
          <p class="txt txt1">미국 휴스턴에 있는 Johnson Space Center에 방문할 기회가 있어, 현지 NASA 고위직급자에게 실제로 했던 질문입니다. “우리도 아직 모릅니다(We do not know yet)”가 그의 답변이었고  이 것이 보령의 우주를 향한 여정의 시작이었습니다.</p>
          <p class="txt txt2">우주로의 여행과 우주에서의 일상적인 삶은 언제나 공상과학 영화 속의 상상이었습니다. 앞으로도 그럴까요? 이미 SpaceX, Blue Origin, Virgin Galatic과 같은 글로벌 우주항공 기업들은 민간인들에게 티켓을 판매하며 우주관광을 상업화하고 있습니다. 2022년 4월 Axiom Space는 인류 역사상 최초로 회사 소속의 민간 우주인을 국제우주정거장으로 상업적 목적을 가지고 보냈습니다. NASA는 2030년까지 달과 화성에 사람을 보낼 계획을 가지고 나아가고 있습니다.  어쩌면 ‘우주시대’는 멀지 않은 시기에 우리 앞에 펼쳐질 것입니다.</p>
          <p class="txt txt3">우주여행을 가거나 우주공간에서 생활할 때 건강을 지키고 아프면 병을 고치는 연구는 누가 하고 있나요? 아쉽게도, 아직은 누구도 크게 관심을 갖지 못하고 있는 미개척 분야입니다. 헬스케어 사업을 영위하며 ‘인류의 건강을 위해 꼭 필요한 기업이 되자’는 미션을 갖고 있는 ‘보령’이 시작 해보겠습니다.</p>
          <p class="txt txt4">지난 2020년 10월, 우주공간에서의 건강을 연구하는 TFT를 구성하고 국내외 관련기관과 단체, 그리고 대학 연구자들을 만나 정보를 수집했습니다. 그리고 22년 1월 정식으로 팀을 구성하고 프로젝트의 이름을 ‘CIS(Care In Space)’로 명명했습니다. 좀더 체계적으로 우주상에서 발생할 헬스케어 관련 이슈를 탐색하고 해법을 모색하기 위한 첫 단추로 ‘국제 CIS Challenge’(소개 페이지 및 홈페이지 참조)를 개최합니다. 이제 시작이지만 인류가 지구에서처럼 우주에서도 건강하고 행복한 삶을 누릴 수 있는 날을 꿈꾸며 앞으로 나아가겠습니다. 많은 응원 부탁드립니다.</p>
        </div>
        <ul class="divs">
          <li>
            <p class="l-tit">CIS History</p>
            <div>
              <p class="date">2020년 10월</p><p class="txt"> CIS TF Kick off</p>
            </div>
            <div>
              <p class="date">2021년 1~12월</p><p class="txt"> 국내외 항공 우주 관련 기관 네트워킹 및 파트너십 진행</p>
            </div>
            <div>
              <p class="date">2022년 2월</p><p class="txt"> Axiom Space 파트너십 체결</p>
            </div>
            <div>
              <p class="date">2022년 4월</p><p class="txt"> 제1회 CIS(Care In Space) Challenge 개최</p>
            </div>
          </li>
          <li>
            <p class="l-tit">Network</p>
            <div class="network">
              <img src="/images/mo/boryung-xs.png" alt="" class="b">
              <img src="/images/mo/network.png" alt="" class="n">
              <p>우주기관</p>
              <p>스타트업</p>
              <p>산학</p>
              <p>전문 항공 우주 사업자</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="c-en">
        <div class="vision">
          <p class="tit">Can we send<br class="mo"> sick people to space?</p>
          <p class="txt txt1">This is the question I actually asked to a senior NASA official when I visited the Johnson Space Center in Houston, Texas. "We do not know yet," he answered and this was the beginning of Boryung's journey to space.</p>
          <p class="txt txt2">Traveling into space and enjoying daily life there has always been an imagination embodied in science fiction movies. Will this remain in our imagination? Already, global aerospace companies like SpaceX, Blue Origin and Virgin Galactic are commercializing space tourism by selling tickets to civilians. In April 2022, Axiom Space sent private astronauts to the International Space Station for commercial purposes for the first time in human history. NASA is also moving forward with plans to send humans to the Moon and Mars by 2030. The space era will not be in distant future than we have anticipated perhaps.</p>
          <p class="txt txt3">In the meantime, who is doing the research to protect people’s health and cure diseases when people get sick while traveling or living in space? Unfortunately, it is an unexplored field that has attracted little interest. Boryung, a healthcare company with a mission to become an indispensible contributor for human health, will be a pioneer.</p>
          <p class="txt txt4">In October 2020, Boryung organized a task force team to research healthcare in space and collected information from relevant institutions, organizations, and researchers at universities at home and abroad. The team was officially established in January 2022 and the project was named ‘CIS (Care In Space)’. As the first step towards exploring and systematically solving space healthcare issues, Boryung will host the International CIS Challenge (for more information, please see the relevant pages on our website). This is the first step and Boryung will take further in the hope that one day humanity will be able to live as healthy and comfortable a life in space as it does on Earth. We would greatly appreciate your relentless support.</p>
        </div>
        <ul class="divs">
          <li>
            <p class="l-tit">CIS History</p>
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
            <p class="l-tit">Network</p>
            <div class="network">
              <img src="/images/mo/boryung-xs.png" alt="" class="b">
              <img src="/images/mo/network.png" alt="" class="n">
              <p>Space-related institutes</p>
              <p>Startups</p>
              <p>Academic researchers</p>
              <p>Established aerospace<br> business companies</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <div class="cont cont2" v-if="active === 'cis'">
      <div class="c-ko">
        <p class="tit">CIS Challenge.</p>
        <p class="txt txt1">CIS Challenge는 우주 공간을 대상으로 개최되는 최초의 헬스케어 엑셀러레이터 프로그램으로서 현재 우주에서 실현 가능한 사업 분야 확장을 목표로 삼고 있습니다.</p>
        <p class="txt txt2">이를 위해 보령, 액시엄 스페이스 (Axiom Space), 스타버스트 (Starburst)는 전략적으로 협력하며, 유망 기업가와 스타트업 대상으로 13주동안 진행될 엑셀러레이터 프로그램 참여 기회와 10만달러의 투자금을 제공합니다. 이를 통해 헬스케어 기업의 제조 역량을 액시엄의 우주선 관련 미션에 활용하는데 기여할 것입니다.</p>
        <p class="txt txt3">이 CIS챌린지는 사업을 성공적으로 출범시켜 성장하는데 필요한 기술, 인적 네트워크, 전문지식을 지원/양성하기 위해 고안되었습니다. 강연, 피칭 훈련, 네트워킹 기회, 특별 이벤트 등이 제공될 것이며, 끝으로 데모데이(demo day)가 열리며 대단원의 막을 내리게 됩니다.</p>
        <p class="txt txt4">프로그램에 선발된 각 팀은 맞춤교육을 받고, 산업 리더, 각 분야 전문가, 잠재적 파트너사, 고객, 그리고 투자자들과 연을 맺게 됩니다. CIS챌린지는 각 팀들의 프로젝트 마일스톤 설정, 기술성숙도(TRL) 증진, 유망시장이 필요로 하는 제품 발굴(PMF), 고객 관리, 차기 투자 유치 등을 지원합니다.</p>
        <div class="c-cnt">
          <p class="t">일정</p>
          <p><s>지원 접수 </s>: 2022년 4월 18일 ~ 6월 17일</p>
          <p><s>Pitch day</s>: 2022년 7월 28일</p>
          <p><s>Demo day</s>: 2022년 12월 15일</p>
        </div>
        <div class="c-cnt c-cnt2">
          <p class="t">파트너</p>
          <p>보령이 주관하며 우주 개발 전문기업 Axiom Space,<br class="mo"> 글로벌 항공우주 스타트업 엑셀러레이터 Starburst Aerospace가 함께 합니다.</p>
          <p>아래 배너를 누르시면 CIS Challenge 홈페이지로 연결됩니다.</p>
        </div>
        <div class="care-logo">
          <a href="https://www.cischallenge.com" target="_blank">
            <img src="/images/mo/care-logo.png" alt="">
          </a>
        </div>
      </div>
      <div class="c-en">
        <p class="tit">CIS Challenge.</p>
        <p class="txt txt1">The CIS Challenge, the first space healthcare accelerator program, aims to expand the scope of businesses that are feasible in space.</p>
        <p class="txt txt2">Boryung, Axiom Space, and Starburst are strategically coming together to offer aspiring entrepreneurs and participating startup companies the opportunity to receive admission into a 13-week accelerator program along with a $100,000 equity investment that will help bring healthcare manufacturing capabilities into space aboard an Axiom Spacecraft.</p>
        <p class="txt txt3">The program is designed to equip companies with the skills, connections, and expertise they need to successfully develop and grow their businesses. The program is composed of lectures, workshops, pitch practice sessions, networking opportunities, and special events, culminating with a demo day. Each team selected for the program will receive personalized instruction and engage with industry leaders, subject matter experts, potential partners, customers, and investors. CIS will helps teams set milestones, advance Technology Readiness Level, define product-market fit, build customer relationships, and secure their next round of funding. Teams will have access to Starburst’s extensive global network and become part of an ecosystem that includes Starburst, Boryung, and Axiom's executive teams, established aerospace entrepreneurs, investors, corporate partners, customers, academic researchers, and more.</p>
        <div class="c-cnt">
          <p class="t">Schedule</p>
          <p><s class="sch-s">Application period </s> : April 18 to June 17, 2022</p>
          <p><s>Pitch day</s>: 28 July 2022</p>
          <p><s>Demo day</s>: 15 December 2022</p>
        </div>
        <div class="c-cnt c-cnt2">
          <p class="t">Partner</p>
          <p>Under the leadership of Boryung, the CIS Challenge will be proceeded in collaboration with Axiom Space, one of the leaders in space development, and Starburst Aerospace, a global aerospace startup accelerator.</p>
          <p>Please click the banner below to see more detailed information on the program.</p>
        </div>
        <div class="care-logo">
          <a href="https://www.cischallenge.com" target="_blank">
            <img src="/images/mo/care-logo.png" alt="">
          </a>
        </div>
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
        {key: 'intro', label: 'gnb.care.intro'},
        {key: 'cis', label: 'gnb.care.cis'}
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

[care] { .fs(0); .p(0,50); .rel; .mt(140); .pb(200); .-box;
  [select-cont] { .pl(20); .-box; }
  .mo { .ib; }
  .web { .hide; }
  &:after { .cnt; .wh(100vw,147.87vw); background: url('/images/mo/care-bg1.png') center top; .cover; .abs; .lt(0,-280); z-index: -1; }
  .cont { .tl;
    &.cont1 { .tc;
      .vision { .mb(180);
        .bg-tit { .fs(54); .lh(48); .bold; color:#e3d7cb; .ls(-0.05em); .mb(36); }
        .tit { .fs(40); .lh(60); .medium; .ls(-0.05em); .mb(60); }
        .txt { .fs(20); .lh(30); .medium; .mb(35); .tl; }
      }
      .divs {
        li { .pb(105); .-box;
          .l-tit { .fs(48); .semi-bold; .ls(-0.05em); .w(260); .bgc(#fff); .ib; .rel; .mb(54);
            &:after { .cnt; .bgc(#e3d7cb); .wh(650,1); .abs; .lt(50%,50%); .ml(-325); z-index: -1; }
          }
          .txt { .fs(24); .ls(-0.05em); .lh(30); }
          &:nth-child(1) { .tl;
            .l-tit { .block; .mh-c; .tc; }
            > div { .w(650); .mh-c; .pl(20); .-box; .mb(5); }
            .date, .txt { .fs(24); .lh(30); .ib; .vat; .ls(-0.05em); }
            .date { .w(170); }
            .txt { .w(460); .keep-all; }
          }
          &:nth-child(2) { .h(730);
            .network { .abs; .lt(50%,120); .ml(-350);
              .n { .wh(709,560); }
              .b { .wh(303,45); .abs; .lt(50%,250); transform: translateX(-50%); z-index: 1; }
              p { .fs(20); .lh(25); .medium; color:#a29992; .abs; .ls(-0.05em);
                &:nth-of-type(1) { .lt(15,50%); .mt(-15%); .tl; }
                &:nth-of-type(2) { .rt(10,50%); .mt(-15%); .tr; }
                &:nth-of-type(3) { .lt(15,50%); .mt(9%); .tl; }
                &:nth-of-type(4) { .rt(10,50%); .mt(9%); .tr; }
              }
            }
          }
        }
      }
    }
    &.cont2 { .tl; .p(0,20); .-box;
      .tit { .fs(48); .lh(60); .medium; .ls(-0.05em); .mb(45); }
      .txt { .fs(24); .lh(40); .medium; .ls(-0.05em); .mb(35); .tl; }
      .c-cnt { .mt(60);
        p { .fs(24); .bold; .mb(5); .ls(-0.05em);
          s { .ib; .w(145); .rel; .pl(20); .-box;
            &:after { .cnt; .wh(8,8); .bgc(#e3d7cb); .br(50%); .abs; .lt(0,50%); transform: translateY(-50%); }
          }
          &.t { .medium; .lh(26); .-l(#2d2d2f); .-r(#2d2d2f); .ib; .p(0,20); .-box; .mb(20); }
        }
      }
      .c-cnt2 p { .medium; .mb(35); }
      .care-logo { .wh(611,100);
        a { .f;
          img { .f; }
        }
      }
    }
  }


  h2, .select-box, .cont .bg-tit, .cont .tit, .cont .txt, .divs li, .network .n, .network .b, .network p, .cont2 .txt, .c-cnt, .care-logo { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  .select-box { transition-delay: 0.8s; }
  .cont .bg-tit { transition-delay: 1.1s; }
  .cont .tit { transition-delay: 1.4s; }
  .cont1 .txt {
    &.txt1 { transition-delay: 1.7s; }
    &.txt2 { transition-delay: 2.0s; }
    &.txt3 { transition-delay: 2.3s; }
    &.txt4 { transition-delay: 2.6s; }
  }
  .divs li {
    &:nth-child(1) { transition-delay: 2.9s; }
    &:nth-child(2) { transition-delay: 3.2s; }
    .network .b { transition-delay: 3.7s; }
    .network .n { transform: scale(1); transition-delay: 4.0s; }
    .network p { transition-delay: 4.3s; }
  }

  .cont2 {
    .tit { transition-delay: 1.1s; }
    .txt {
      &.txt1 { transition-delay: 1.4s; }
      &.txt2 { transition-delay: 1.7s; }
      &.txt3 { transition-delay: 2.0s; }
      &.txt4 { transition-delay: 2.3s; }
    }
    .c-cnt { transition-delay: 2.6s; }
    .c-cnt2 { transition-delay: 2.9s; }
    .care-logo { transition-delay: 3.2s; }
  }

  &.ready {
    h2, .select-box, .cont .bg-tit, .cont .tit, .cont .txt, .divs li, .network .n, .network .b, .cont2 .txt, .c-cnt, .care-logo { opacity:0; transform: translateY(100px); }
    .divs li .network {
      .b { opacity: 0; }
      .n { opacity: 0; transform: scale(0.9); }
      p { opacity: 0; }
    }
  }
  &.refresh {
    h2, .select-box, .cont .bg-tit, .cont .tit, .cont .txt, .divs li, .network .n, .network .b, .cont2 .txt, .c-cnt, .care-logo { transition: opacity 0s, transform 0s; transition-delay: 0s; opacity:0; transform: translateY(100px); }
    .divs li .network {
      .b { opacity: 0; }
      .n { opacity: 0; transform: scale(0.9); }
      p { opacity: 0; }
    }
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
    .cont.cont1 {
      .c-en .vision .tit { .fs(54); .tc; .bold; }
      .divs li {
        > div { .pl(0);  }
        &:nth-child(2) .network p:nth-of-type(4) { .mt(4%); }
      }
    }
    .cont2 .c-en .c-cnt .sch-s { width: auto; }
  }
}
[select-cont] .select-box s { .hide; }
@media screen and(min-width: 1240px) {
  [care] { .max-w(1240); .p(180,40,200,60)!important; .-box; .mh-c; .mt(0);
    [select-cont] { .pl(0);
      .select-box { .r(0); }
    }
    .mo { .hide; }
    .web { .ib; }
    &:after { .h(984); background: url('/images/pc/care-bg1.png') center top; .lt(50%,-109); .ml(-50vw); }
    .cont { .mt(20); .w(860);
      &.cont1 {
        .vision {
          .tit { .mb(80); }
          .txt { .ls(-0.05em); .keep-all; }
        }
        .divs {
          li { .pb(150);
            .l-tit { .w(460); .mb(40);
              &:after { .wh(860,1); .ml(-430); }
            }
            &:nth-child(1) {
              > div { width:auto; .pl(0); .mb(5); }
              .date, .txt { .fs(20); }
              .date { .w(150); }
              .txt { width:auto; }
            }
          }
        }
      }
      &.cont2 { .p(0);
        .tit { .fs(36); .lh(48); }
        .txt { .fs(18); .lh(36); }
        .c-cnt { .mt(100);
          p { .fs(18); .mb(10);
            s { .ib; .w(120); }
            &.t { .lh(20); .p(0,10); .mb(10); }
          }
        }
        .c-cnt2 { .mt(60);
          p { .mb(35);
            &:last-child { .mb(20); }
          }
        }
      }
    }
  }
  #app {
    &.en [care] {
      [select-cont] { .pl(0); }
      .cont.cont1 {
        .c-en .vision .tit { .tl; }
        .divs li {
          &:nth-child(2) .network p:nth-of-type(4) { .mt(35); }
        }
      }
    }
  }
}
</style>