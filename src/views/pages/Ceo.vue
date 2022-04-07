<template>
  <div ceo :class="{ready}">
    <SelectContent title="CEO Letter." :list="selectList" :active="active" @select="select"/>
    <div class="ceo-letter" :class="{refresh}">
      <div class="cont cont1" v-if="active === 'kim'">
        <p class="tit"></p>
        <div class="txt" v-if="lang === 'ko'">
          <p>2021년 보령의 제약사업은 전년대비 인상적인 성장을 이뤄낸 한 해 였습니다. 2020년 대비 별도 기준 매출액은 10%, 영업이익은 25% 성장하였고, 이는 Covid-19라는 환경 속에서 단발성 호재가 아닌 사업 자체의 경쟁력을 바탕으로 이룬 결과 이기에 더욱이 그렇다고 생각합니다. 보령컨슈머헬스케어와의 연결 기준으로는 성장률이 둔화되어 보이지만, 회사의 미래 성장을 위한 공격적인 투자에 바탕을 둔 결과이기에, 2022년부터는 연결 기준의 실적도 의미 있는 성장을 해나갈 것입니다. 2022년은 보령의 주력인 제약사업은 장두현 대표님을 필두로 이루어진 훌륭한 경영진을 바탕으로 견조한 성장 기조를 이어 갈 것이라고 생각하며, 장두현 대표님의 Annual Letter에 제약 사업에 대한 보다 자세한 내용이 담겨 있으니, 읽어 보실 것을 추천 드립니다.</p>
          <p>제가 장두현 대표님의 Annual Letter와는 별도로 이 글을 쓰는 목적은 주주총회에서 결정이 난 것처럼 회사의 이름이 ‘보령제약’에서 ‘보령’으로 변경된 것과 궤를 같이 합니다. 또한 임직원들과 주주 여러분, 그리고 향후 보령이 가는 방향에 함께 가게 될 잠재적 파트너분들께 저의 관점에서 지난 한 해를 되돌아 보고, 앞으로 나아가는 방향에 대해서 공유 드리려고 합니다.</p>
          <p>저를 포함한 보령에서 함께 일하고 있는 구성원들은 제약 사업에서뿐만 아니라 범위를 넓혀 Healthcare 산업 전반에서 회사를 성장시킬 수 있는 기회가 무궁무진하다고 믿고 있습니다. 따라서 우리는 그러한 기회들을 적극적으로 찾고, 투자하여, 회사를 성장시킬 것 입니다. 이해도가 높은 분야에서 기회를 찾을 것이며, 소수 지분 투자보다는 회사나 자산에 대한 전체 인수를 우선적으로 볼 것이고, 이러한 적극적인 투자를 통해 장기적으로 회사의 이익 창출력(earning power)을 성장 시키는데 집중할 것입니다.</p>
          <p>우리는 회사 또는 자산이 장기적으로 누군가에게 꼭 필요한 지와 그 사업을 이끌고 있는 경영진의 능력을 투자의 가장 중요한 기준으로 삼을 것 입니다. 사업이 장기적으로 누군가에게 꼭 필요하고, 그 사업을 이끄는 경영진이 훌륭하다면, 우리 회사의 성장에 절대적으로 도움이 되리라 믿기 때문입니다.</p>
          <p>위에서 말씀드린 바와 같이 우리만의 기준으로 회사의 이익을 성장시킬 수 있는 사업들을 찾아내서 투자 하는 것이 최우선 과제입니다. 하지만 보령이 장기적인 관점에서 인류에게 꼭 필요한 회사가 되려면 무엇을 해야할 지 내부적으로 고민하던 중 우주라는 공간에서 그런 회사가 되면 어떨까라는 도전적이고 장기적인 프로젝트를 구상하게 되었습니다.</p>
          <p>우리는 언제나 그래왔듯, 인류가 미지의 세계로의 도전을 멈추지 않을 것이라 믿습니다. 그렇기 때문에 보령은 인류가 우주로 나아가는데 꼭 필요한 회사가 되려면 무엇을 해야 할지 답을 찾기 위해서 미래를 함께 만들어 갈 파트너들과 함께 ‘Care In Space’ Challenge를 매년 개최하여 한 발자국씩 나아가기로 했습니다. 지금 당장의 최우선 목표가 이익 창출력 성장이라는 것은 변함이 없지만 우주라는 새롭게 열리는 기회의 공간에서 우리가 해야 하는 것들을 찾아가는 것도 꾸준히 해나갈 것입니다. 회사가 이익을 늘려나가는 이유도 결국은 더 큰 성장을 위한 미래 투자 재원을 만들기 위해서 이기 때문입니다. 홈페이지 첫 화면의 CIS 관련 링크로 들어가시면 관련 정보를 보실 수 있습니다.</p>
          <p>앞으로 매년 저의 편지와 주주총회를 통해서 보령의 과거, 현재, 미래에 대해 공감하며, 우리 구성원분들과 우리를 믿고 투자하기로 결정하신 분들과 장기적으로 함께 성장해 나갈 수 있는 자리를 만들도록 노력 하겠습니다.</p>
          <p>감사합니다.</p>
          <p class="date">2022.03.25</p>
          <p class="sign">㈜ 보령 대표이사 김정균 <img src="/images/mo/sign1.png" alt=""></p>
        </div>
        <div class="txt" v-else>
          <p>Boryung Corp. achieved impressive growth in 2021 compared to a year ago. In fact, stand-alone revenue climbed 10% year-on-year (YoY) and operating profit soared 25%YoY. The phenomenal financial performance was achieved through our intrinsic business competitiveness in the face of the COVID-19 pandemic, rather than due to one-off events. On a consolidated basis (including Boryung Consumer Healthcare), growth could appear sluggish, but this was caused by aggressive investments for future growth. Hence, Boryung is forecast to achieve meaningful growth even in consolidated earnings starting in 2022. Our pharmaceutical business, the flagship growth driver of Boryung, should continue to display solid growth this year, backed by Daniel Chang and our excellent management team. Investors are advised to read his 2022 annual letter for more detailed information on the pharmaceutical business.</p>
          <p>I decided to write a separate annual letter from Daniel in the same vein as the decision made at the latest shareholders’ meeting to change our name to Boryung Corp. to set out our new direction. To this end, I intend to review the past year from my point of view and examine the direction Boryung is taking with our employees, shareholders and potential partners.</p>
          <p>We believe not only pharmaceuticals, but the healthcare businesses also offer limitless opportunities for growth to our company. We are determined to aggressively find new opportunities in areas familiar to us and invest in them in order to take our company one step further. To this end, we intend to acquire a promising company or assets as a whole, rather than secure a minor stake in it. With such aggressive investments, we aim to strengthen our earning power over the long term.</p>
          <p>We will make investment decisions based on the following criteria: 1) whether the corresponding company is essential to a specific population and 2) whether its management is capable of leading the corresponding business successfully. If these two preconditions are met, the company or assets should offer tremendous opportunities for our future growth.</p>
          <p>As I mentioned earlier, our top priority is to discover and invest in businesses necessary for solid profit growth looking ahead. From a long-term point of view, however, we felt the need to ponder on which projects are needed for Boryung to become irreplaceable to humanity. Then, we came up with this challenging long-term project—becoming a major player in outer space.</p>
          <p>We believe humanity will not stop exploring uncharted territory. This is why we decided to hold a ‘Care in Space’ Challenge’ event annually with our partners in order to greatly contribute to humankind’s foray into outer space. Surely, our immediate top priority remains the growth of our earning power, but we still aim to discover promising new projects in outer space, which is a territory brimming with new opportunities. Indeed, our very reason for boosting earnings is the need to secure financial resources for future investments and facilitate stronger growth. Investors can get related information by clicking the CIS-related link on the first screen of our webpage.</p>
          <p>We are committed to preparing various opportunities and events in order to grow together with market participants who share our views on the past, present and future of Boryung through CEO letters and shareholders’ meeting and decide to trust and invest in Boryung.</p>
          <p>Thank you.</p>
          <p class="date">2022.03.25</p>
          <p class="sign">Boryung CEO & Chairman Jay Kim <img src="/images/mo/sign1.png" alt=""></p>
        </div>
      </div>
      <div class="cont cont2" v-if="active === 'chang'">
        <p class="tit"></p>
        <div class="txt" v-if="lang === 'ko'">
          <p>보령 제약사업부문은 지난해 ‘코로나19’ 인한 경영 환경 악화 속에서도 괄목할만한 재무적 성과를 이뤄냈습니다. 2021년 실적을 보면, 매출은 5444억원으로 전년 대비 10% 성장하였고, 영업이익 또한 501억원으로 24% 성장하며, 매출과 영업이익 모두 창사 이래 사상 최대 실적을 기록했습니다.</p>
          <p>지난해 출시 10주년을 맞은 고혈압 신약 카나브 라인업은 매출 1,100억원을 돌파하며 국산신약의 우수성과 상업적 경쟁력을 입증했고, 국내에서 독보적인 위치에 서 있는 항암제 사업은 전년대비 17% 성장하며 마침내 지난해 매출 1,000억원을 돌파했습니다. 또한 특허 만료 후에도 높은 브랜드 로열티를 가지고 있는 오리지널 제품의 일체 권리를 인수하는 방식인 ‘LBA(Legacy Brands Acquisition) 전략의 실행으로, 조현병치료제 ‘자이프렉사’를 자산화하는데 성공했습니다.</p>
          <p>도입품목의 성장도 빼 놓을 수 없는 성과 중 하나입니다. 당뇨병 주사제 치료제 시장점유율 1위인 ‘트루리시티’는 2016년 첫 출시 이후 5개년 연평균성장율 43%라는 고공행진을 기록하며 지난해에는 469억원의 매출을 달성했습니다. 일반의약품 스테디셀러 ‘겔포스’와 ‘용각산’의 성장도 여전히 현재진행형입니다. 국내 최초의 중국 수출 의약품인 ‘겔포스’는 지난해 중국 대형 제약사인 시노팜을 통해 중국 전역으로 유통망을 확대하게 되었고, ‘용각산쿨’은 호흡기질환 치료제 시장의 위축 속에서도 지난해 소비자 판매실적이 전년대비 2배 이상 상승하며 시장 전체를 선도하는 품목으로 자리매김했습니다.</p>
          <p>무엇보다 고무적인 것은 수익성 있는 성장을 지속하고 있다는 점입니다. 지난 2005년부터 16년 연속 매출 성장을 이뤄내고 있으며, 최근 2019년부터는 3년 연속으로 해마다 매출과 영업이익이 동반으로 역대 최대치를 기록하고 있습니다.</p>
          <p>2022년은 새로운 보령을 위한 중장기 성장 기반을 마련하는 한 해로 만들기 위해서, 제약부문의 사업전략을 더욱 공고히 할 계획입니다. 중기적으로는 ‘자가제품력 강화를 통한 수익성 극대화’를 목표로 하고 있습니다. 특히 올해는 자가 제품의 수익성 강화 및 신제품 포트폴리오의 강화에 역점을 두고, 성장 기반을 단단히 다져가겠습니다.</p>
          <p>첫째, 카나브 패밀리는 2026년까지 매출 2,000억원 달성을 위해 올해도 신규 복합제를 선보이는 등 다양한 치료옵션을 바탕으로 매출 성장 고속화에 앞장서는 한편, 2023년 특허 만료 이후에도 경쟁력을 잃지 않도록 ‘카나브 에버그린 전략’을 차질 없이 수행해 나가겠습니다. 또한, 카나브를 비롯한 전문의약품(Rx)에 대한 임상연구 투자를 작년 대비 2배 이상 확대해, 임상적 근거를 바탕으로 한 마케팅으로 시장점유율을 더욱 높여 나갈 계획입니다.</p>
          <p>둘째로, 보령의 미래성장동력인 항암제 사업은 바이오시밀러 추가 도입 등 신규파트너링 강화를 통해 제품 포트폴리오를 확장하는 한편, 항암 보조제부분문 포트폴리오도 확대해 독보적인 항암제 리딩기업으로 자리매김해 나가겠습니다. 또한, 지난해 신설한 국내 유일의 ‘혈액암 전문그룹’을 바탕으로 혈액암 시장점유율도 확대해갈 계획입니다. 뿐만 아니라, 지난해 임상을 통해 ‘완전관해’가 확인되며 탁월한 효과를 보여준 비호지킨성 림프종 치료제 BR2002의 개발에도 더욱 속도를 낼 예정입니다.</p>
          <p>셋째로, 2026년까지 자가 제품 비중을 70% 수준으로 끌어올려 업계 최고의 수익성을 갖출 수 있는 기반을 다져 나가겠습니다. 이를 위해 LBA 전략을 바탕으로 오리지널 제품을 지속적으로 인수하기 위해 노력하고 지난 해 자산화에 성공한 조현병치료제 ‘자이프렉사’를 바탕으로 CNS(중추신경계) 사업도 더욱 적극적으로 펼쳐나갈 것입니다. 여기에 더해 대형품목 제네릭 개발에 집중하고 당뇨, 고지혈, 비뇨기 제품 등에 대한 개량신약 파이프라인 구축에도 힘쓰겠습니다.</p>
          <p>끝으로, 지난해 본격적으로 중국 전역으로 공급망이 확장된 겔포스의 올해 중국 시장점유율을 더욱 확대해 나가는 등 해외시장에서도 성과를 이루어 갈 것입니다.</p>
          <p>2022년은 보령의 퀀텀 점프를 위한 디딤돌이 될 중요한 한해입니다. 저를 비롯한 보령의 모든 구성원들은 끊임없는 혁신과 도전을 해나갈 것입니다. 우리 보령이 더 높은 곳을 바라보고 더 큰 꿈을 꿀 수 있도록 여러분들의 아낌없는 관심과 성원을 부탁드립니다.</p>
          <p>감사합니다.</p>
          <p class="date">2022.03.25</p>
          <p class="sign">㈜ 보령 대표이사 장두현 <img src="/images/mo/sign2.png" alt=""></p>
        </div>
        <div class="txt" v-else>
          <p>Boryung delivered remarkable financial results in 2021, in spite of the unfavorable operating environment amid the COVID-19 pandemic. We achieved record-high earnings last year, with revenue rising 10%YoY to KRW594.4bn and operating profit soaring 25%YoY to KRW50.1bn.</p>
          <p>Our Kanarb line-up, which celebrated its 10th anniversary last year, posted KRW110bn in sales, demonstrating the superb quality and commercial competitiveness of domestic new drugs. Our oncology business, which boasts a dominant standing in Korea, grew 17%YoY and topped KRW100bn in sales. Furthermore, we acquired the entire rights of original drugs that retain solid brand loyalty even after patent expiry. The strategy of acquiring legacy brands led to the assetization of Zyprexa, a major medicine for schizophrenia.</p>
          <p>We also achieved sales growth in co-promoted items, which is a remarkable feat. For instance, Trulicity, the No. 1 injection drug for diabetes in Korea that hit the domestic market in 2016, exhibited a CAGR of staggering 43% during 2017-2021 and posted KRW46.9bn in sales last year. Our OTC drugs also stood out. Two steady sellers, Gelfos and Yonggaksan, are still achieving sales growth. Gelfos, Korea’s first drug export item to China, extended its distribution networks across that country last year in collaboration with Sinopharm International of China. As for Yonggaksan Cool, B2C sales more than doubled YoY and led overall market growth even as the respiratory disease treatment market shrank last year.</p>
          <p>Above all, our sustained profitable growth is impressive. Boryung has displayed sales growth for 16 straight years since 2005 while breaking previous highs for three consecutive years since 2019.</p>
          <p>We plan to fortify our strategies for the pharmaceutical business in order to establish the groundwork for the mid/long-term growth of new Boryung. We aim to maximize profitability over the mid-term by strengthening the quality of our products. This year, we will focus on reinforcing the profitability of our products and bolstering the portfolio of new products in order to lay the firm foundation for growth.</p>
          <p>First, our Kanarb family drugs will lead robust sales growth based on new combination drug launches and various treatment options to achieve KRW200bn in sales by 2026. To this end, an evergreening strategy will be implemented for the Kanarb brand so that it will not lose competitiveness even after patent expiry. In addition, Boryung plans to raise market share further by more than doubling clinical study budgets for Kanarb and other prescription drugs (Rx) and executing marketing activities based on clinical evidence.</p>
          <p>Second, Boryung is determined to position itself as a dominant player in the oncology market by: 1) extending the portfolio of oncology drugs, Boryung’s future growth driver, through new partnerships (e.g., additional biosimilar co-promotions) and 2) expanding the portfolio of anticancer supportive care products. In addition, Boryung plans to raise our share of the hematologic malignancy market through the establishment of HEMA sales group in 2021, the only hematologic malignancy sales company in Korea. Furthermore, we will accelerate the development of BR2002, a medicine for Non-Hodgkin’s lymphoma that showed remarkable efficacy through complete remission at clinical studies in 2021.</p>
          <p>Third, we aim to raise the sales ratio of our own products up to 70% by 2026 in order to secure the highest profitability in the industry. For this, we will strive to continuously acquire original drugs through LBA strategy and engage more actively with the central nervous system (CNS) drug business on the back of Zyprexa which was assetized last year. Moreover, we will focus on developing generics for major drugs and establishing the pipelines of incrementally modified drugs (IMDs) for diabetes, hyperlipidemia and urinary disease.</p>
          <p>Lastly, we will establish solid presence in overseas markets this year while expanding the Chinese market share of Gelfos through strengthened supply networks across that country last year.</p>
          <p>We are certain 2022 will see Boryung lay the groundwork for a quantum leap ahead. All of Boryung’s members, including myself, are committed to pushing for relentless innovation and embracing challenges. We call for your unwavering support to help us dream bigger and set our sights on higher grounds.</p>
          <p>Thank you.</p>
          <p class="date">2022.03.25</p>
          <p class="sign">Boryung CEO Pharma Business <img src="/images/mo/sign2.png" alt=""></p>
        </div>
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
      refresh: true,
    }
  },
  mounted() {
    setTimeout(() => { this.ready = false },100);
    setTimeout(() => { this.refresh = false },1600);
  },
  computed: {
    active() {
      return this.$route.params.ceo
    },
    selectList() {
      return [
        {key: 'kim', label: this.$t('gnb.ceo.kim')},
        {key: 'chang', label: this.$t('gnb.ceo.chang')}
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
    select(ceo) {
      if (this.active === ceo) return;
      this.$router.push({ params: { ceo } })
    }
  }
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[ceo] { .fs(0); .p(0,70); .-box; .m(140,0);
  .ceo-letter { .mt(84);
    .cont {
      .txt { .fs(24); .lh(36); .ls(-0.075em); .mt(18); .regular;
        p { .mb(37);
          &.date { .m(50,0,0); .ib; }
          &.sign { .fs(30); .mt(8);
            &.en { .bold; }
          }
        }
      }
      &.cont1 {
        .tit { .wh(514,48); .contain('/images/mo/ceo-img1.png'); }
        .txt .sign { .mt(-10);
          img { .wh(196,110); .ib; .vam; .m(-25,0,0,25); }
        }
      }
      &.cont2 {
        .tit { .wh(604,44); .contain('/images/mo/ceo-img2.png'); }
        .txt .sign img { .wh(82,33); .ib; .vam; .m(-15,0,0,25); }
      }
    }
  }
  h2, .select-box, .cont .tit, .cont .txt p, .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  .select-box { transition-delay: 0.8s; }
  .cont .tit { transition: opacity 0.8s, transform 0.8s; }
  .cont .txt p { transition: opacity 0.8s, transform 0.8s;
    &:nth-child(1) { transition-delay: 0.4s; }
    &:nth-child(2) { transition-delay: 0.7s; }
    &:nth-child(3) { transition-delay: 1.0s; }
    &:nth-child(4) { transition-delay: 1.3s; }
    &:nth-child(5) { transition-delay: 1.6s; }
    &:nth-child(n+6) { transition-delay: 1.9s; }
  }
  .v-bg { transform: translateX(0); transition-delay: 4.0s; }
  &.ready {
    h2, .select-box { opacity:0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
  .refresh {
    .cont .tit, .cont .txt p { transition: opacity 0s, transform 0s; transition-delay: 0s; opacity:0; transform: translateY(100px); }
  }
  .v-bg { .hide; }
}

#app {
  &.ko .ceo-letter .cont {
    &.cont1 .tit { .contain('/images/mo/ceo-img1.png'); }
    &.cont2 .tit { .contain('/images/mo/ceo-img2.png'); }
  }
  &.en .ceo-letter .cont {
    &.cont1 .tit { .contain('/images/mo/ceo-img1-en.png'); }
    &.cont2 .tit { .contain('/images/mo/ceo-img2-en.png'); }
  }
}
@media screen and(min-width: 1240px) {
  [ceo] { .p(180,0,0); .mt(0);
    .ceo-letter { .max-w(1240); .p(0,40,0,60); .-box; .mh-c; .mt(0);
      .cont {
        .txt { .fs(18); .lh(36); .mt(32); .keep-all;
          p { .mb(40);
            &.date { .fs(24); .m(10,0,0); }
            &.sign { .fs(24); .mt(10); .semi-bold; }
          }
        }
        &.cont1 {
          .tit { .wh(596,52); .contain('/images/pc/ceo-img1.png'); }
          .txt .sign { .mt(-10);
            img { .wh(196,110); .m(-25,0,0,25); }
          }
        }
        &.cont2 {
          .tit { .wh(708,53); .contain('/images/pc/ceo-img2.png'); }
          .txt .sign img { .wh(82,33); .ib; .vam; .m(-15,0,0,25); }
        }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; }
  }
}
</style>