<template>
  <div news :class="{ready}">
    <h2>News.</h2>
    <ul>
      <li>
        <span class="list-vis"><img src="/images/mo/img1.png" alt=""></span>
        <RouterLink to="/ko/news-detail">
          <p class="l-tit">보령제약, 주식회사 ‘보령’으로 사명 변경</p>
          <p class="l-txt">보령제약은 25일 정기 주주총회를 열고 사명을 ‘보령제약 주식회사’에서 ‘주식회사 보령(Boryung Corp.)으로 변경하는 안을 승인했다. 회사는 “변화하는 환경 속에서 더 많은 성장, 투자 기회를 국내 제약산업 뿐만 아니라 글로벌 헬스케어 산업 전반으로 확장코자 사명을 변경하게 됐다”고 설명했다. 이번 사명 변경 승인에 따라 신뢰와 협력 속에 더 큰 가치를 추구하는 보령의 정체성을 담은 New CI(사진)도 정립하고, 후속 변경 절차를 통해 4월부터 제품 등에도 새 사명과보령제약은 25일 정기 주주총회를 열고 사명을 ‘보령제약 주식회사’에서 ‘주식회사 보령(Boryung Corp.)으로 변경하는 안을 승인했다. 회사는 “변화하는 환경 속에서 더 많은 성장, 투자 기회를 국내 제약산업 뿐만 아니라 글로벌 헬스케어 산업 전반으로 확장코자 사명을 변경하게 됐다”고 설명했다. 이번 사명 변경 승인에 따라 신뢰와 협력 속에 더 큰 가치를 추구하는 보령의 정체성을 담은 New CI(사진)도 정립하고, 후속 변경 절차를 통해 4월부터 제품 등에도 새 사명과 ...</p>
        </RouterLink>
      </li>
      <li>
        <span class="list-vis"><img src="/images/mo/img2.png" alt=""></span>
        <RouterLink to="/ko/news-detail">
          <p class="l-tit">보령제약, 조현병 치료제 ‘자이프렉사’ 국내 권리 인수</p>
          <p class="l-txt">보령제약(대표이사 장두현)이 미국 글로벌 제약사인 릴리社(대표이사 데이비드 A. 릭스)와 조현병 치료제 ‘자이프렉사(성분명 올란자핀)‘에 대한 자산 양수∙양도 계약을 체결했다고 21일 밝혔다. 이번  계약을 통해, 보령제약은 릴리로부터 자이프렉사에 대한 국내 판권 및 허가권 등 일체의 권리를 인수하게 된다. 릴리의 오리지널 제품인 ‘자이프렉사’는 1996년 출시된 이래 세계에서 가장 많이 처방된 조현병 치료제다</p>
        </RouterLink>
      </li>
      <li>
        <span class="list-vis"><img src="/images/mo/img3.png" alt=""></span>
        <RouterLink to="/ko/news-detail">
          <p class="l-tit">보령제약, ‘젬자’ 국내 권리 인수, 항암제 라인업 강화</p>
          <p class="l-txt">보령제약(대표 안재현, 이삼수)과 美 일라이 릴리社(회장 데이브 릭스)가 항암제 ‘젬자’에 대한 자산 양수∙도 계약을 체결했다. 이번 계약을 통해 보령제약은 美 릴리로부터 젬자(성분명 젬시타빈염산염)의 한국 내 판권 및 허가권 등 일체의 권리를 갖게 됐다. 보령제약과 한국릴리는 지난 2015년부터 ‘젬자’ 코프로모션을 진행해 왔다. 보령제약은 이번 인수를 통해 오리지널 제품에 대한 포트폴리오를 강화하는 한편 이익율을 더욱 개선할 수 있을 것으로 기대하고 있다 보령제약(대표 안재현, 이삼수)과 美 일라이 릴리社(회장 데이브 릭스)가 항암제 ‘젬자’에 대한 자산 양수∙도 계약을 체결했다. 이번 계약을 통해 보령제약은 美 릴리로부터 젬자(성분명 젬시타빈염산염)의 한국 내 판권 및 허가권 등 일체의 권리를 갖게 됐다. 보령제약과 한국릴리는 지난 2015년부터 ‘젬자’ 코프로모션을 진행해 왔다. 보령제약은 이번 인수를 통해 오리지널 제품에 대한 포트폴리오를 강화하는 한편 이익율을 더욱 개선할 수 있을 것으로 기대하고 있다...</p>
        </RouterLink>
      </li>
    </ul>
    <Pagination />
  </div>
</template>

<script>
import Pagination from "@/views/components/Pagination";
export default {
  name: "News",
  components: {Pagination},
  data() {
    return {
      ready: true,
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

[news] { .mt(140); .p(0,70); .-box; .tl;
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; }
  ul { .mt(75);
    li { .pb(50); .mb(50); .-b(#a29992); .-box;
      a { .f; .pointer; }
      .list-vis { .wh(520,142); .ib; .-a(#e3d7cb); .mb(43);
        img { .f; }
      }
      .l-tit { .fs(24); .bold; color:#3b3b3c; .mb(30); .ls(-0.05em); }
      .l-txt { .fs(24); color:#a29992; .ls(-0.025em); .wf; overflow: hidden; text-overflow: ellipsis; display: -webkit-inline-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; word-wrap:break-word;  }
    }
  }
  h2,  ul li, [pagination] { opacity:1; transform: translateY(0); transition: all 1s; transition-timing-function: ease-in-out; }
  ul li {
    &:nth-child(1) { transition-delay: 1s; }
    &:nth-child(2) { transition-delay: 1.6s; }
    &:nth-child(3) { transition-delay: 2.2s; }
  }
  [pagination] { transition-delay: 2.8s; }
  &.ready {
    h2, ul li, [pagination] { opacity:0; transform: translateY(100%); }
  }
}
@media screen and(min-width: 1200px) {
  [news] { .p(0); .mt(287px); .max-w(1200px); .mh-c; .pb(320px);
    h2 { .fs(80px); .lh(80px); .ml(60px); }
    ul { .mt(110px); .pl(60px); .-box;
      li { .pb(30px); .mb(50px); .w(810px);
        .list-vis { .wh(580px,158px); .mb(20px); }
        .l-tit { .fs(18px); .mb(15px); }
        .l-txt { .fs(16px); -webkit-line-clamp: 2; }
      }
    }
  }
}
</style>