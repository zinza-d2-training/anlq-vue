<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <div class="home">
      <div class="home__general">
        <div class="home__general__item pa-5">
          <div class="home__general__item_img mr-5">
            <img src="../assets/images/register_people.png" alt="register_people" />
          </div>
          <div class="home__general__item_content">
            <h4>Đối tượng đăng kí tiêm</h4>
            <h1>
              11,203,873 <sub><i>(lượt)</i></sub>
            </h1>
          </div>
        </div>
        <div class="home__general__item pa-5">
          <div class="home__general__item_img mr-5">
            <img src="../assets/images/injection.png" alt="injection" />
          </div>
          <div class="home__general__item_content">
            <h4>Đối tượng đăng kí tiêm</h4>
            <h1>
              1,762,119 <sub><i>(mũi)</i></sub>
            </h1>
          </div>
        </div>
        <div class="home__general__item pa-5">
          <div class="home__general__item_img mr-5">
            <img src="../assets/images/injection.png" alt="injection" />
          </div>
          <div class="home__general__item_content">
            <h4>Đối tượng đăng kí tiêm</h4>
            <h1>
              1,762,119 <sub><i>(mũi)</i></sub>
            </h1>
          </div>
        </div>
      </div>
      <div class="home__chart">
        <h3>Dữ liệu tiêm theo ngày</h3>
        <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" />
      </div>
      <div class="home__table">
        <h3>Tra cứu điểm tiêm theo địa bàn</h3>
        <div class="home__table__select pt-4">
          <v-select
            dense
            :items="provinceData"
            v-model="selectProvince"
            outlined
            type="text"
            name="selectProvince"
            return-object
            item-text="name"
            item-value="id"
            placeholder="Tỉnh/Thành phố"
            class="home__table__select__item"></v-select>
          <v-select
            dense
            :items="districtData"
            v-model="selectDistrict"
            outlined
            type="text"
            name="selectDistrict"
            return-object
            item-text="name"
            item-value="id"
            placeholder="Quận/Huyện"
            class="home__table__select__item"></v-select>
          <v-select
            dense
            :items="wardData"
            v-model="selectWard"
            outlined
            type="text"
            name="selectWard"
            return-object
            item-text="name"
            item-value="id"
            placeholder="Xã/Phường"
            class="home__table__select__item"></v-select>
          <v-btn color="deep-purple darken-4" dark @click="searchDataByAddress()">
            <v-icon left> mdi-magnify </v-icon>
            Tìm Kiếm
          </v-btn>
        </div>
        <div class="home__table__context">
          <v-data-table
            :headers="headerTableData"
            :items="showDataTables"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            @page-count="pageCount = $event"></v-data-table>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </div>
      </div>
    </div>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderLayout from '../layout/HeaderLayout.vue';
import FooterLayout from '../layout/FooterLayout.vue';
import {
  labelDate,
  dataDate,
  addressData,
  headerTableData,
  dataTables
} from '../data/HomePageData';
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js';
import { DataTable, District, HeaderTableData, Province, Ward } from '@/type/address';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement);

@Component({
  components: {
    HeaderLayout,
    FooterLayout,
    LineChartGenerator
  }
})
export default class Home extends Vue {
  chartData = {
    labels: labelDate,
    datasets: [
      {
        label: 'Đã tiêm',
        backgroundColor: 'red',
        borderColor: 'blue',
        data: dataDate
      }
    ]
  };
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  headerTableData: HeaderTableData[] = headerTableData;
  dataTables: DataTable[] = dataTables;
  page: number = 1;
  pageCount: number = 0;
  itemsPerPage: number = 2;
  selectProvince: Province | null = null;
  selectDistrict: District | null = null;
  selectWard: Ward | null = null;
  provinceData: Province[] = addressData;

  showDataTables: DataTable[] = this.dataTables.map((item: DataTable) => {
    return { ...item };
  });

  get districtData(): District[] | null {
    this.selectDistrict = null;
    return this.selectProvince?.districts ?? null;
  }

  get wardData(): Ward[] | null {
    this.selectWard = null;
    return this.selectDistrict?.wards ?? null;
  }

  searchDataByAddress() {
    this.showDataTables = this.dataTables.filter((item: DataTable) => {
      if (this.selectDistrict?.id == null && this.selectWard?.id == null) {
        return item.province.id == this.selectProvince?.id;
      } else if (this.selectWard?.id == null) {
        return (
          item.province.id == this.selectProvince?.id && item.district.id == this.selectDistrict?.id
        );
      } else {
        return (
          item.province.id == this.selectProvince?.id &&
          item.district.id == this.selectDistrict?.id &&
          item.ward.id == this.selectWard?.id
        );
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__general {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 0 13px #00000033;
    margin: 20px;
    border-radius: 5px;

    &__item {
      display: flex;
      align-items: center;
      width: 33.33%;
      border-left: 1px solid #0000002e;
    }
  }

  &__chart,
  &__table {
    padding: 20px;
    box-shadow: 0px 0 13px #00000033;
    margin: 20px;
    border-radius: 5px;

    &__select {
      display: flex;
      align-items: baseline;

      &__item {
        max-width: 400px;
        margin-right: 25px;
      }

      button {
        border-radius: 10px 10px 10px 0px;
      }
    }
  }
}
</style>
