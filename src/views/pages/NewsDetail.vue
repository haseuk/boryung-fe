<template>
  <div detail :class="{ready}">
    <h2>News.</h2>
    <div class="news-visual"><img src="/images/mo/img4.png" alt=""></div>
    <div class="v-tit">보령제약, 조현병 치료제 ‘자이프렉사’ 국내 권리 인수</div>
    <div class="v-txt">
      - 릴리社로부터 ‘자이프렉사‘ 일체 권리 인수, 중추신경계(CNS) 치료제 사업 강화<br>
      - 2020년 ‘젬자‘에 이어 두번째 LBA, 추가 인수 위해 다수 제품 검토 중<br>
      <br>
      보령제약(대표이사 장두현)이 미국 글로벌 제약사인 릴리社(대표이사 데이비드 A. 릭스)와 조현병 치료제 ‘자이프렉사(성분명 올란자핀)‘에 대한 자산 양수∙양도 계약을 체결했다고 21일 밝혔다.<br>
      <br>
      이번 계약을 통해, 보령제약은 릴리로부터 자이프렉사에 대한 국내 판권 및 허가권 등 일체의 권리를 인수하게 된다.<br>
      <br>
      릴리의 오리지널 제품인 ‘자이프렉사’는 1996년 출시된 이래 세계에서 가장 많이 처방된 조현병 치료제다. 조현병(정신분열병)과 양극성장애에 쓰이는 약물로, 뇌 속의 정신 및 감정을 조절하는 화학물질인 ‘도파민’의 불균형을 조절해주는 역할을 한다.<br>
      <br>
      의약품시장조사기관 아이큐비아(IQVIA) 자료에 따르면, 자이프렉사는 지난해 국내 ‘올란자핀’ 시장에서 약 140억원의 매출액을 기록해, 약 50%의 점유율로 처방액 1위를 기록하고 있다.<br>
      <br>
      이번 계약은 지난 7월 보령제약이 985억원 규모의 유상증자를 실시하면서 밝힌 LBA(Legacy Brands Acquisition) 전략의 일환으로 이뤄졌다.<br>
      <br>
      LBA는 특허 만료 후에도 높은 브랜드 로열티에 기반하여 일정 수준의 매출 규모와 시장 점유율을 유지할 수 있는 오리지널 의약품 인수를 의미한다.<br>
      <br>
      보령제약은 2020년 5월 릴리로부터 항암제 ‘젬자(성분명 젬시타빈염산염)’의 국내 권리를 인수해 국내 제약사 중 ‘항암제 시장점유율 1위’를 공고히 지키고 있다.<br>
      <br>
      보령제약은 젬자에 이은 두번째 LBA인 이번 자이프렉사 인수를 바탕으로 정신질환 의약품 포트폴리오를 확대해 중추신경계(CNS, Central Nervous System)치료제 사업을 더욱 강화해 나갈 방침이다.<br>
      <br>
      보령제약은 부스파(정신억제제), 푸로작(중추흥분제), 스트라테라(행동장애) 등의 제품 포트폴리오를 바탕으로 CNS 사업 역량을 강화해 왔다. 오는 2025년까지 CNS 부문 연매출 500억원을 목표로, 항암제 분야와 더불어 특화된 경쟁력을 갖춘 사업 분야로 육성할 계획이다.<br>
      <br>
      보령제약 장두현 대표이사는 “자이프렉사 인수로 CNS 치료제 사업의 새로운 도약의 계기를 마련하게 됐다”며 “앞으로도 보령제약의 성장에 기여할 수 있는 제품을 지속적으로 인수하기 위해, 국내외에서 임상적 가치를 인정받으며 치료제 시장을 리딩하고 있는 다수의 제품을 검토하고 있다”고 말했다.
    </div>
    <LngLink to="/news" class="list-go"><img src="/images/mo/before.png" alt="">List</LngLink>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
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

[detail] { .mt(140); .p(0,70); .-box; .tl;
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(65); }
  .news-visual { .w(610); .mh-c; .-a(#e3d7cb);
    img { .f; }
  }
  .v-tit { .fs(30); .lh(37); .bold; color:#3b3b3c; .ls(-0.05em); .mt(48); }
  .v-txt { .fs(24); .lh(30); color:#a29992; .mt(40); .p(25,0,50); .-box; .-t(#a29992); .-b(#a29992); }
  .list-go { .fs(30); .ls(-0.05em); .block; .mh-c; .mt(30); .tc;
    img { .wh(28,24); .ib; pointer-events: none; .mr(25); }
  }
  h2, .news-visual, .v-tit, .v-txt, .list-go { opacity:1; transform: translateY(0); transition: all 1s; transition-timing-function: ease-out; }
  .news-visual { transition-delay: 1s; }
  .v-tit { transition-delay: 2s; }
  .v-txt { transition-delay: 2.6s; }
  .list-go { transition-delay: 3.2s; }
  &.ready {
    h2, .news-visual, .v-tit, .v-txt, .list-go { opacity:0; transform: translateY(100px); }
  }
}
@media screen and(min-width: 1200px) {
  [detail] { .p(0); .mt(287px); .max-w(1200px); .mh-c; .pb(320px);
    h2 { .fs(80px); .lh(80px); .mb(105px); .ml(60px); }
    .news-visual { .w(800px); }
    .v-tit { .fs(24px); .lh(37px); .mt(30px); }
    .v-txt { .fs(16px); .lh(24px); .mt(24px); .p(45px,0,45px); }
    .list-go { .fs(30px); .mt(40px);
      img { .wh(28px,24px); .mr(20px); }
    }
  }
}
</style>
