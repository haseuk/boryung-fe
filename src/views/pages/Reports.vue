<template>
  <div reports :class="{ready}">
    <SelectContent title="Reports" list1="연차보고서" list2="감사보고서" list3="IR"/>
    <div class="cont cont1" v-if="cont1">
      <table cellpadding="0" cellspacing="0" border="0">
        <colgroup>
          <col width="8%">
          <col width="55%">
          <col width="17%">
          <col width="20%">
        </colgroup>
        <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Date</th>
          <th>Download</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2</td>
          <td>2021년 보령제약 연차 보고서</td>
          <td>2021.05.03</td>
          <td><a class="down"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>
        <tr>
          <td>1</td>
          <td>2021년 보령제약 연차 보고서</td>
          <td>2021.05.03</td>
          <td><a class="down"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="cont cont2" v-else-if="cont2">
      <table cellpadding="0" cellspacing="0" border="0">
        <colgroup>
          <col width="8%">
          <col width="55%">
          <col width="17%">
          <col width="20%">
        </colgroup>
        <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Date</th>
          <th>Download</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>6</td>
          <td>2021년 보령제약 감사 보고서</td>
          <td>2021.05.03</td>
          <td><a class="down"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>
        <tr>
          <td>5</td>
          <td>2021년 보령제약 감사 보고서</td>
          <td>2021.05.03</td>
          <td><a class="down"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>
        <tr>
          <td>4</td>
          <td>2021년 보령제약 감사 보고서</td>
          <td>2021.05.03</td>
          <td><a class="down"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>2021년 보령제약 감사 보고서</td>
          <td>2021.05.03</td>
          <td><a class="down"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>2021년 보령제약 감사 보고서</td>
          <td>2021.05.03</td>
          <td><a class="down"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>

        <tr>
          <td>1</td>
          <td>2021년 보령제약 감사 보고서</td>
          <td>2021.05.03</td>
          <td><a class="down"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="cont cont3" v-else>
      <ul>
        <li>
          <a>재무정보</a>
        </li>
        <li>
          <a>공시</a>
        </li>
        <li>
          <a>주가정보</a>
        </li>
        <li>
          <a>주주문의</a>
        </li>
        <li>
          <a>사업보고서</a>
        </li>
        <li>
          <a>IR 자료실</a>
        </li>
      </ul>
      <p class="noti">* Pharma Home > IR 세부페이지가 새탭으로 열립니다.</p>
    </div>
    <Pagination />
    <span class="v-bg"></span>
  </div>
</template>

<script>
import SelectContent from "@/views/components/SelectContent";
import Pagination from "@/views/components/Pagination";
export default {
  name: "reports",
  components: {Pagination, SelectContent},
  data() {
    return {
      ready: true,
      cont1: true,
      cont2: false,
      cont3: false
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

[reports] { .p(0,70); .-box; .mt(140);
  .cont {
    table { .wf; table-layout: fixed; border-collapse: collapse; .-t(#a29992); .-b(#a29992);
      tbody tr {
        &:nth-child(1) td { .pt(20); .-box; }
        &:last-child td { .pb(20); .-box; }
      }
      tr {
        th, td { .ls(-0.05em); }
        th { .fs(24); .tc; color:#a29992; .p(20,0); .-box; .semi-bold; .-b(#a29992);
          &:nth-child(1) { .tl; }
          &:nth-child(4) { .tr; }
        }
        td { .fs(20); .tc; .p(8,0); .-box;
          &:nth-child(1), &:nth-child(2) { .tl; }
          &:nth-child(4) { .tr; }
          .down {  .ib;
            img { .wh(60,45); .ib; .pr(25); }
          }
        }
      }
    }
    &.cont3 { .tc;
      ul {
        li { .fs(36); .lh(48); .wh(48%,142); .ib; .m(0,4%,30,0); .-a(#a29992); .p(45,0,0,40); .-box; .rel; .tl; .ls(-0.05em);
          &:after { .cnt; .wh(56,20); .contain('/images/mo/arr-r-xl.png'); .abs; .rt(28,62); pointer-events: none; }
          a { .f; }
          &:nth-child(even) { .mr(0); }
        }
      }
      .noti { .fs(24); color:#3b3b3c; .tl; }
    }
  }
  .v-bg { .hide; }

  h2, .select-box, .cont, [pagination], .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-in-out; }
  .select-box { transition-delay: 0.8s; }
  .cont { transition-delay: 1.6s; }
  [pagination] { transition-delay: 2.4s; }
  .v-bg { transform: translateX(0); transition-delay: 3.0s; }
  &.ready {
    h2, .select-box, .cont, [pagination] { opacity:0; transform: translateY(100%); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
}
@media screen and(min-width: 1240px) {
  [reports] { .max-w(1240); .p(180,40,180,60); .-box; .mh-c; .mt(0);
    [select-cont] { .pl(0);
      .select-box { .r(0); }
    }
    .cont {
      table { .w(820);
        tbody tr {
          &:nth-child(1) td { .pt(25); }
          &:last-child td { .pb(30); }
        }
        tr {
          th { .fs(20); .p(20,0); }
          td { .p(15,0);
            .down {
              img { .pr(20); }
            }
          }
        }
      }
      &.cont3 {
        ul { .w(725);
          li { .wh(345,142); .m(0,32,29,0);
            &:after { .rt(48,62); }
            &:nth-child(3) { .mr(32); }
          }
        }
        .noti { .fs(18); .mt(5); }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; }
  }
}
</style>