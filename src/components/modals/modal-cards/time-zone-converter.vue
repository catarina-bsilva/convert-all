<template>
    <Modal>
        <h1>
            Time Zone Converter
        </h1>
        <form @submit.prevent="submitForm">
            <div v-if="timeZoneData && timeZoneData.result && timeZoneData.result.zones && timeZoneData.result.zones.zone">
        <SelectMed
          SelLabel="From"
          :Ops="countryNames"
          :selectedValue="FromZone"
          @selected="FromZone = $event"
        />
        <SelectMed
          SelLabel="To"
          :Ops="countryNames"
          :selectedValue="ToZone"
          @selected="ToZone = $event"
        />
      </div>
            <div class="d-flex flex-column justify-items-center align-items-center w-100 mb-3">
              <label class="form-label" for="in1">Time</label>
              <input type="time" name="time" id="in1" class="form-control" style="width: 100px" v-model="currentTime">
            </div> 
            <div class="d-flex flex-column justify-items-center align-items-center w-100 mb-3">
              <label class="form-label" for="in2">Converted Time</label>
              <input type="time" name="time" id="in2" class="form-control" style="width: 100px" v-model="convertedTime" readonly>
            </div> 
            <SubmitBtn/>
            <ResetBtn @click="resetForm"/>
        </form>    
        <!-- <pre v-for="(zone, index) in timeZoneData.result.zones.zone" :key="index">
        {{ zone.countryName._text }}
      </pre> -->
    
    </Modal>
    
</template>

<script>
import Modal from "../../reusables/modal.vue"
import InputNumMed from "../modals-elements/input-num-med.vue"
import OutputNormal from "../modals-elements/output-normal.vue"
import SelectMed from "../modals-elements/selectMed.vue"
import SubmitBtn from "../modals-elements/submit-btn.vue"
import ResetBtn from "../modals-elements/reset-btn.vue"
import axios from 'axios';
import xmljs from 'xml-js';
export default {
    components:{
        Modal,
        InputNumMed,
        OutputNormal,
        SelectMed,
        SubmitBtn,
        ResetBtn
    },
    data() {
    return {
        apiUrl: "https://api.timezonedb.com/v2.1/list-time-zone?key=6GMA9BRBY2C8&format=xml",
        timeZoneData: null,
        TimeOffset: 0,
        Ops:[],
        Time: 0,
        FromZone: "",
        ToZone: "",
        Total: 0,
        loading: true,
        List: [],
        countryNames: [],
        currentTime: "",
        convertedTime: ""
    };
  },
  mounted() {
    this.getAPIDATA();
    this.setCurrentTime()
    
  },
  methods: {
    async getAPIDATA() {
      console.log("Fetching data from API...");
      try {
        const res = await axios.get(this.apiUrl, {
          headers: {
            'Content-Type': 'application/xml'
          },
        });
        console.log("Data fetched successfully:", res.data);
        const xml = res.data;
        const json = JSON.parse(xmljs.xml2json(xml, { compact: true, spaces: 2 }));
        console.log("Converted JSON:", json);
        this.timeZoneData = json;
        this.Ops = this.timeZoneData.result.zones.zone.map(zone => ({
            zone: zone.zoneName._text,
            time: zone.gmtOffset._text,
            country: zone.countryName._text,
        }));
        
        this.countryNames = Object.keys(this.List)

        const countryCount = this.Ops.reduce((acc, c) => {
        acc[c.country] = (acc[c.country] || 0) + 1;
        return acc;
      }, {})

      const processedOps = this.Ops.map(c => {
        const zonePart = c.zone.split('/').pop(); // Pega a parte após o último /
        return {
          countryDisplay: countryCount[c.country] > 1 ? `${c.country} - ${zonePart}` : c.country,
          country: c.country,
          time: c.time
        };
      });

      processedOps.sort((a, b) => a.countryDisplay.localeCompare(b.countryDisplay))

      this.List = processedOps.reduce((acc, c) => {
        acc[c.countryDisplay] = c.time;
        return acc;
      }, {})

      this.countryNames = Object.keys(this.List)

        this.loading = false;
      } catch (error) {
        console.error('Failed to fetch timezone data', error);
        this.timeZoneData = 'Failed to fetch data.';
        this.loading = false;
        alert('Failed to fetch timezone data. Please try again later.')
      }
    },
    setCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      this.currentTime = `${hours}:${minutes}`;
    },
    convertTime(fromOffset, toOffset, time) {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date();
  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);

  // Calculate the difference in offsets
  const offsetDifference = (toOffset - fromOffset) * 1000;

  // Calculate the converted time
  const convertedTimeMs = date.getTime() + offsetDifference;

  const convertedDate = new Date(convertedTimeMs);
  const convertedHours = String(convertedDate.getUTCHours()).padStart(2, '0');
  const convertedMinutes = String(convertedDate.getUTCMinutes()).padStart(2, '0');

  return `${convertedHours}:${convertedMinutes}`;
},
    resetForm() {
      this.Time = 0;
      this.FromZone = "";
      this.ToZone = "";
      this.Total = 0;
      this.convertedTime = ""
    },
    updateInputTime(value) {
        this.Time = parseFloat(value);
        },
    submitForm(){
      if (this.FromZone && this.ToZone) {
        const fromOffset = parseInt(this.List[this.FromZone], 10);
        const toOffset = parseInt(this.List[this.ToZone], 10);
        this.convertedTime = this.convertTime(fromOffset, toOffset, this.currentTime);
      }
        
    }
  },
};
</script>

<style>

</style>

 