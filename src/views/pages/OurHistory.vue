<template>
  <div history :class="{ready}">
    <h2>Our History.</h2>
    <div v-if="lang === 'ko'">
      <p class="tit">2022년 4월,<br> 보령의 새로운 도전이 시작됩니다.</p>
      <p class="txt">새로운 기회를 찾고, 투자하여 회사를 성장시키는 재도약의 원년으로 삼고자 2022년 3월 25일 주주총회를 통해 회사명을 “보령제약”에서 “보령”으로 변경했습니다. 더불어 국내 제약산업을 선도하는 기업을 넘어 더 큰 가치를 추구하는 보령의 정체성을 담아 CI도 새롭게 선보였습니다.</p>
      <p class="txt">보령의 역사는 아픈 이를 위해 자전거로 시내를 돌며 없던 약도 구해주던 창업자 김승호 회장님의 정신을 기반으로 1957년 종로5가 보령약국의 창업으로부터 시작되었습니다.</p>
      <p class="txt">1963년에는 의약품 도소매업에서 본격적인 의약품 제조업으로 진출했으며, 단순히 의약품을 생산하는 것을 넘어 환자에게 꼭 필요한 신약 개발에 투자하고자 했던 보령의 도전은 2011년 3월 국내 최초 ARB계열 고혈압 신약 “카나브”를 발매하면서 제약 사업의 장기적 성장의 토대를 마련하게 되었습니다.</p>
      <p class="txt">2022년 4월에는 우리 앞에 펼쳐질 우주 시대를 맞아 새로운 기회를 찾고, “인류 건강에 꼭 필요한 기업이 되자”는 우리의 미션을 수행하기 위한 하나의 도전으로서 첫번째 ‘Care in Space(CIS) Challenge’를 개최합니다.</p>
      <p class="txt">1957년 "아픈 이를 위해서 없는 약도 구해 주겠다”는 작지만 큰 진심이 오늘날 “인류의 건강에 꼭 필요한 기업이 되겠다”는 우리의 미션으로 확장되어 이어가고 있습니다.</p>
      <p class="txt txt2">2022년, 새 이름 <em>보령</em>으로 펼쳐갈<br> 새로운 도전과 여정을 지켜봐 주십시오.</p>
      <p class="txt">감사합니다.</p>
    </div>
    <div v-else>
      <p class="tit">Boryung takes<br class="mo"> on a new challenge<br> in April 2022.</p>
      <p class="txt">Aiming to make 2022 the year of another leap forward by identifying new opportunities and encouraging investment, we changed our corporate name from Boryung Pharmaceutical to Boryung Corp. at our general shareholders’ meeting on March 25, 2022. The new CI was also introduced to demonstrate Boryung's identity that pursues greater value and going beyond a leader in the domestic pharmaceutical industry.</p>
      <p class="txt">The history of Boryung began in 1957 with the opening of the Boryung Pharmacy in Jongno 5-ga, based on the spirit of the founder Kim Seung-ho, who used to ride his bicycle around the city to get medicines for sick people no matter how hard they were to find.</p>
      <p class="txt">Boryung, which had been in the pharmaceutical wholesale industry, advanced into the pharmaceutical manufacturing in 1963. Boryung’s attempt to invest in the development of vital medicines for patients, rather than being a mere drug manufacturer, laid the foundation for long-term growth in the pharmaceutical business when the company released "Kanarb," the first ARB antihypertensive in South Korea in March 2011.</p>
      <p class="txt">In April 2022, Boryung will hold the first Care in Space (CIS) Challenge to find new opportunities and fulfill its mission to become “an indispensable contributor to human health" in the space era that lies ahead of us.</p>
      <p class="txt">The founder’s deep devotion with great sincerity to provide “medicine for the sick” has been expanded since 1957 and passed onto out current mission to become an indispensable to human health.</p>
      <p class="txt txt2">We kindly ask for your consistent attention to our new challenges and journey under the new name <em>Boryung</em> in 2022.</p>
      <p class="txt">Thank you.</p>
    </div>
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

[history] { .fs(0); .p(0,60,0,70); .-box; .mt(140); .pb(200); .-box;
  .mo { .ib; }
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(75); }
  p { .ls(-0.05em); color:#2d2d2f; .medium; }
  .tit { .fs(44); .mb(60); .ls(-0.07em); }
  .txt { .fs(20); .lh(36); .mb(45); }
  .txt2 { .fs(30); .lh(48);
    em { .bold; }
  }
  h2, p { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  p {
    &:nth-child(1) { transition-delay: 0.4s; }
    &:nth-child(2) { transition-delay: 0.7s; }
    &:nth-child(3) { transition-delay: 1.0s; }
    &:nth-child(4) { transition-delay: 1.3s; }
    &:nth-child(5) { transition-delay: 1.6s; }
    &:nth-child(6) { transition-delay: 1.9s; }
    &:nth-child(7) { transition-delay: 2.2s; }
    &:nth-child(8) { transition-delay: 2.5s; }
  }
  &.ready {
    h2, p { opacity:0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
  .v-bg { .hide; }
}
@media screen and(min-width: 1240px) {
  [history] { .max-w(1240); .p(180,40,200,60); .-box; .mh-c; .mt(0);
    .mo { .hide; }
    h2 { .lh(80); .mb(105); }
    > div { .w(765); .ml(150);
      p { .keep-all; }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; }
  }
}
#app {
  &.en [history] .txt2 { .fs(24); }
}
</style>
