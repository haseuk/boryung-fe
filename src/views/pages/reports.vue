<template>
  <div reports>
    <SelectContent />
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
        <td>21년 보령제약 연차 보고서</td>
        <td>2021.05.03</td>
        <td><a class="down"></a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>21년 보령제약 연차 보고서</td>
        <td>2021.05.03</td>
        <td><a class="down"></a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SelectContent from "@/views/components/SelectContent";
export default {
  name: "reports",
  components: {SelectContent},
  data() {
    return {}
  }

}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[reports] { .p(0,70); .-box;
  table { .wf; table-layout: fixed; border-collapse: collapse; .-t(#a29992); .-b(#a29992);
    tr {
      th, td { .ls(-0.05em); }
      th { .fs(24); .tc; .p(20,0); .-box; .semi-bold; .-b(#a29992);
        &:nth-child(1) { .tl; }
        &:nth-child(4) { .tr; }
      }
      td { .fs(20); .tc; .p(15,0); .-box;
        &:nth-child(1), &:nth-child(2) { .tl; }
      }
    }
  }
}
</style>