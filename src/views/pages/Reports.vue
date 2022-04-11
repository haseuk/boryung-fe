<template>
  <div reports :class="{ready, refresh}">
    <SelectContent title="Reports." :list="selectList" :active="active" @select="select"/>

    <div class="cont cont3" v-if="active === 'ir'">
      <div class="c-ko">
        <ul>
          <li>
            <svg class="box" xmlns="http://www.w3.org/2000/svg" width="346.5px" height="143.5px">
              <path fill-rule="evenodd"  stroke="rgb(162, 153, 146)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,0.499 L345.499,0.499 L345.499,142.499 L0.499,142.499 L0.499,0.499 Z"/>
            </svg>
            <a href="https://www.boryung.co.kr/ir/financial.do" target="_blank">재무정보</a>
          </li>
          <li>
            <svg class="box" xmlns="http://www.w3.org/2000/svg" width="346.5px" height="143.5px">
              <path fill-rule="evenodd"  stroke="rgb(162, 153, 146)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,0.499 L345.499,0.499 L345.499,142.499 L0.499,142.499 L0.499,0.499 Z"/>
            </svg>
            <a href="https://www.boryung.co.kr/ir/report.do" target="_blank">공시</a>
          </li>
          <li>
            <svg class="box" xmlns="http://www.w3.org/2000/svg" width="346.5px" height="143.5px">
              <path fill-rule="evenodd"  stroke="rgb(162, 153, 146)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,0.499 L345.499,0.499 L345.499,142.499 L0.499,142.499 L0.499,0.499 Z"/>
            </svg>
            <a href="https://www.boryung.co.kr/ir/stock.do" target="_blank">주가정보</a>
          </li>
          <li>
            <svg class="box" xmlns="http://www.w3.org/2000/svg" width="346.5px" height="143.5px">
              <path fill-rule="evenodd"  stroke="rgb(162, 153, 146)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,0.499 L345.499,0.499 L345.499,142.499 L0.499,142.499 L0.499,0.499 Z"/>
            </svg>
            <a href="https://www.boryung.co.kr/ir/contactir.do" target="_blank">주주문의</a>
          </li>
          <li>
            <svg class="box" xmlns="http://www.w3.org/2000/svg" width="346.5px" height="143.5px">
              <path fill-rule="evenodd"  stroke="rgb(162, 153, 146)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,0.499 L345.499,0.499 L345.499,142.499 L0.499,142.499 L0.499,0.499 Z"/>
            </svg>
            <a href="https://www.boryung.co.kr/ir/Businessreport.do" target="_blank">사업보고서</a>
          </li>
          <li>
            <svg class="box" xmlns="http://www.w3.org/2000/svg" width="346.5px" height="143.5px">
              <path fill-rule="evenodd"  stroke="rgb(162, 153, 146)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,0.499 L345.499,0.499 L345.499,142.499 L0.499,142.499 L0.499,0.499 Z"/>
            </svg>
            <a href="https://www.boryung.co.kr/ir/resource.do" target="_blank">IR 자료실</a>
          </li>
        </ul>
        <p class="noti">* Pharma Home> IR 세부페이지가 새탭으로 열립니다.</p>
      </div>
      <div class="c-en">
        English materials are<br>
        not available on this page.
      </div>
    </div>
    <div class="cont cont1" v-else>
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
        <tr v-for="(item, index) in list" :key="item.sq">
          <td>{{ paging.listCount - (paging.pageNo - 1) * paging.perPage - index }}</td>
          <td><a :href="file(item)" target="_blank">{{ item.title }}</a></td>
          <td>{{ date(item.dt) }}</td>
          <td><a class="down" :href="download(item)"><img src="/images/mo/ico-down.png" alt=""></a></td>
        </tr>
        </tbody>
      </table>
      <Pagination  :paging="paging" @go="changePage"/>
    </div>
    <span class="v-bg"></span>
  </div>
</template>

<script>
import SelectContent from "@/views/components/SelectContent";
import Pagination from "@/views/components/Pagination";
import axios from "axios";
export default {
  name: "reports",
  components: {Pagination, SelectContent},
  data() {
    return {
      ready: true,
      refresh: true,
      list: null,
      paging: null,
      params: { perPage: 5, pageNo: 1 }
    }
  },
  computed: {
    active() {
      return this.$route.params.reports
    },
    selectList() {
      return [
        {key: 'annual', label: this.$t('gnb.reports.annual')},
        {key: 'audit', label: this.$t('gnb.reports.audit')},
        {key: 'ir', label: this.$t('gnb.reports.ir')},
      ]
    }
  },
  watch: {
    active() {
      this.refresh = true;
      this.loadList(100);
    },
    $route() {
      this.changePage(1)
    }
  },
  methods: {
    select(reports) {
      if (this.active === reports) return;
      this.$router.push({ params: { reports } })
    },
    changePage(pageNo) {
      this.params.pageNo = pageNo;
      this.loadList(100)
    },
    async loadList(interval) {
      this.refresh = true;
      if (this.active !== 'ir') {
        const {data} = await axios.get(`/api/board/${this.lang}/${this.active}`, {params: this.params})
        this.list = data.list;
        this.paging = data.paging;
      }
      await this.sleep(interval)
      this.refresh = false;
    }
  },
  mounted() {
    setTimeout(() =>{ this.ready = false },500);
    this.loadList(1500)
  },

}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[reports] { .p(0,70); .-box; .mt(140); .pb(200); .-box;
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
          .down { .wh(60,45); .ib; .mr(25);
            img { .wh(60,45); .ib; }
          }
        }
      }
    }
    &.cont3 { .tc;
      ul {
        li { .fs(36); .lh(48); .wh(48%,142); .ib; .m(0,4%,30,0); .-a(#a29992); .rel; .tl; .ls(-0.05em); .vat; .-box;
          &:after { .cnt; .wh(56,20); .contain('/images/mo/arr-r-xl.png'); .abs; .rt(28,62); pointer-events: none; }
          a { .f; .ib; .p(45,0,0,35); .-box; }
          &:nth-child(even) { .mr(0); }
          .box { .hide; }
        }
      }
      .noti { .fs(24); color:#3b3b3c; .tl; .ls(-0.025em); .nowrap; .mt(60); }
      .c-en { .fs(36); .lh(60); .tl; .medium; .mt(140); }
    }
  }
  .cont + [pagination] { .hide; }
  .cont2 + [pagination] { .block; }

  .v-bg { .hide; }

  h2, .select-box, .cont, [pagination], .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  .select-box { transition-delay: 0.8s; }
  .cont { transition-delay: 0s; }
  [pagination] { transition-delay: 0.8s; }
  .v-bg { transform: translateX(0); transition-delay: 3.0s; }
  &.ready {
    h2, .select-box, .cont, [pagination] { opacity:0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
  &.refresh {
    .cont, [pagination] { transition: opacity 0s, transform 0s; transition-delay: 0s; opacity:0; transform: translateY(100px); }
  }
}

#app {
  &.ko {
    .c-en { .hide; }
    .c-ko { .block; }
  }
  &.en {
    .c-ko { .hide; }
    .c-en { .block; }
  }
}
@media screen and(min-width: 1240px) {
  [reports] { .max-w(1240); .p(180,40,200,60); .-box; .mh-c; .mt(0);
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
            .down { .mr(15);
              &:hover { box-shadow: 5px 5px 0 1px rgba(0,0,0,0.1); transition:all 0.5s; }
              img { .pr(20); }
            }
          }
        }
      }
      &.cont3 {
        ul { .w(725);
          li { .wh(345,142); .m(0,32,29,0); .-a;
            a { .abs; .lt; }
            &:after { .rt(48,62); }
            &:nth-child(3) { .mr(32); }
          }
        }
        .noti { .fs(18); .mt(5); }
        .c-en { .mt(0); }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; }
    .cont.cont3 ul li {
      .box { .ib; }
      &:hover {
        .box { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: dash 0.5s linear; animation-fill-mode: both; }
      }
    }
    @keyframes dash {
      from { stroke-dashoffset: 1000; }
      to { stroke-dashoffset: 0; }
    }
  }
}
</style>
