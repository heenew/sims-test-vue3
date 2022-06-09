<template>
  <div>
    <div id="excel" ref="spreadsheet"></div>
    <div>
      <input
        type="button"
        value="Add new row"
        @click="() => spreadsheet.insertRow()"
      />
    </div>
  </div>
</template>

<script>
import jexcel from "jspreadsheet-ce";

var data = [
  ["Jazz", "Honda", "2019-02-12", "", true, "$ 2.000,00", "#777700"],
  ["Civic", "Honda", "2018-07-11", "", true, "$ 4.000,01", "#007777"],
];
var options = {
  data: data,
  allowToolbar: true,
  search: true,
  pagination: 10,
  filters: true,
  allowComments: true,
  columns: [
    { type: "text", title: "Car", width: "120px" },
    {
      type: "dropdown",
      title: "Make",
      width: "250px",
      source: ["Alfa Romeo", "Audi", "Bmw"],
    },
    { type: "calendar", title: "Available", width: "250px" },
    { type: "image", title: "Photo", width: "120px" },
    { type: "checkbox", title: "Stock", width: "80px" },
    {
      type: "numeric",
      title: "Price",
      width: "100px",
      mask: "$ #.##,00",
      decimal: ",",
    },
    { type: "color", width: "100px", render: "square" },
  ],
};
export default {
  name: "Excel",
  mounted: function () {
    let spreadsheet = jexcel(this.$el, options);
    Object.assign(this, { spreadsheet });
  },
};
</script>
<style>
@import "https://jsuites.net/v4/jsuites.css";
@import "https://bossanova.uk/jspreadsheet/v4/jexcel.css";
</style>
