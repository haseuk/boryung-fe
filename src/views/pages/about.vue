<template>
  <div about>
    <SelectContent />
    <div class="cont cont1">
      <p class="top-tit kr">언제 어디서나,<br>누구나 행복한 삶을 누릴 수 있도록<br>
        <em>인류의 건강을 위해 꼭 필요한<br> 헬스케어 기업이 되겠습니다.</em>
      </p>
      <p class="bg-tit kr">Mission</p>
      <div class="core-values">
        <p class="c-tit">핵심가치</p>
        <ul>
          <li>
            <em>Become Irreplaceable</em>
            대체할 수 없는 기업이 되자
          </li>
          <li>
            <em>Think Long-Term</em>
            장기적 관점으로 판단하자
          </li>
          <li>
            <em>Pursue Extreme Transparency</em>
            투명하고 깨끗한 기업이 되자
          </li>
          <li>
            <em>Be Nice</em>
            상대방에 친절한 기업이 되자
          </li>
        </ul>
      </div>
    </div>

    <div class="cont cont2">
      <p class="tit">2020 ~</p>
      <ul>
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
      </ul>

      <p class="tit">2001 ~ 2019</p>
      <ul>
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
      </ul>

      <p class="tit">1957 ~ 2000</p>
      <ul>
        <li class="b"><p class="date">2000. 12</p><p class="txt">보령제약 1,000억원 매출 달성</p></li>
        <li><p class="date">1988. 10</p><p class="txt">기업 공개(주식상장)</p></li>
        <li><p class="date">1988. 06</p><p class="txt">안산공장 준공</p></li>
        <li><p class="date">1985. 03</p><p class="txt">보령의료봉사상 제정</p></li>
        <li><p class="date">1980. 02</p><p class="txt">보령중앙연구소 신설</p></li>
        <li><p class="date">1963. 11</p><p class="txt">보령제약주식회사 창립(동영제약 인수)</p></li>
        <li><p class="date">1957. 10</p><p class="txt">종로5가 보령약국 창업</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
import SelectContent from "@/views/components/SelectContent";
export default {
  name: 'About',
  components: {SelectContent},
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[about] { .fs(0); .p(0,35); .-box;
  [select-cont] { .p(0,35); }
  .cont { .tl;
    &.cont1 { .tc;
      .top-tit { .fs(30); .medium; color:#2d2d2f; .ls(-0.05);
        em { .fs(48); }
      }
      .bg-tit { .fs(120); .lh(150); color:#e3d7cb; .bold; .ls(-0.05em); opacity: 0.4; }
      .core-values { .mt(127);
        .c-tit { .fs(48); .semi-bold; .ls(-0.05em); .w(257); .ib; .bgc(#fff); .rel;
          &:after { .cnt; .bgc(#e3d7cb); .wh(87vw,1); .abs; .lt(50%,50%); .ml(-43.5vw); z-index: -1; }
        }
        ul { .mt(75);
          li { .fs(30); .semi-bold; .ls(-0.05em); .rel; .mb(40);
            &:after { .cnt; .wh(22,22); .ls(-0.05em); .bgc(#e3d7cb); .br(50%); .abs; .lt(50%,-10); .ml(-11); }
            em { .fs(48); .block; .break-all; }
            &:last-child:after { .t(-15); }
          }
        }
      }
    }
    &.cont2 { .p(0,35);
      .tit { .fs(72); .medium; color:#e3d7cb; .ls(-0.05em); }
      ul { .mb(100);
        &:last-child { .mb(0); }
        li { .mb(19); .wf;
          &:last-child { .mb(0); }
          p { .fs(20); .lh(29); color:#2d2d2f; .ls(-0.05em); .ib; .medium; .vat;
            &.date { .w(18%); }
            &.txt { .w(82%); }
          }
          &.b p { .bold; }
        }
      }
    }
  }
}
</style>
