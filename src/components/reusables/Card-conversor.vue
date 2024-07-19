<template>
    <div class="row justify-content-center  ">
          <div class="col-sm-6 col-md-4 col-xl-3 mb-3 "  v-for="(converter, index) in category.Converters" :key="converter" >
                <div class="card shadow-sm m-auto" style="width: 15rem; height: 15rem">
                    <div class="card-header text-center bg-info bg-opacity-25 d-flex align-items-center justify-content-center" style="height: 4rem" >
                            <h5>{{ converter.name }}</h5>
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between">
                            <p class="text-center ">{{ converter.description }}</p>
                            <button class="btn btn-outline-info mt-auto " @click="openModal(index)">Try converter</button>
                            <component :is="converter.name.toLowerCase().replace(/\s+/g, '-')" :id="'modal' + index" />
                    </div>
                </div>
          </div>
    </div>
</template>

<script>
import Bd from "@/assets/bd.json"
import Modal from "./modal.vue";
import AngleConverter from '../modals/modal-cards/angle-converter.vue';
import AreaConverter from "../modals/modal-cards/area-converter.vue";
import BiomedicalUnitsConverter from "../modals/modal-cards/biomedical-units-converter.vue";
import BmiCalculator from "../modals/modal-cards/bmi-calculator.vue";
import BraSizeConverter from "../modals/modal-cards/bra-size-converter.vue";
import BroadbandSpeedCalculator from "../modals/modal-cards/broadband-speed-calculator.vue";
import TimeUnitConverter from "../modals/modal-cards/time-unit-converter.vue";
import CaloriesBurnedCalculator from "../modals/modal-cards/calories-burned-calculator.vue";
import CaloriesIngestedCalculator from "../modals/modal-cards/calories-ingested-calculator.vue";
import ClothingSizeConverter from "../modals/modal-cards/clothing-size-converter.vue";
import CmykToRgbConverter from "../modals/modal-cards/cmyk-to-rgb-converter.vue";
import CookingMeasurements from "../modals/modal-cards/cooking-measurements.vue";
import CurrencyConverter from "../modals/modal-cards/currency-converter.vue";
import DataConverter from "../modals/modal-cards/data-converter.vue";
import DateOfMaturityCalculator from "../modals/modal-cards/date-of-maturity-calculator.vue";
import DensityConverter from "../modals/modal-cards/density-converter.vue";
import EnergyConverter from "../modals/modal-cards/energy-converter.vue";
import FuelEfficiencyConverter from "../modals/modal-cards/fuel-efficiency-converter.vue";
import GloveSizeConverter from "../modals/modal-cards/glove-size-converter.vue";
import HatSizeConverter from "../modals/modal-cards/hat-size-converter.vue";
import HeatIndexCalculator from "../modals/modal-cards/heat-index-calculator.vue";
import HexToRgbConverter from "../modals/modal-cards/hex-to-rgb-converter.vue";
import HsvToRgbConverter from "../modals/modal-cards/hsv-to-rgb-converter.vue";
import InterestRateCalculator from "../modals/modal-cards/interest-rate-calculator.vue";
import InvestmentReturnCalculator from "../modals/modal-cards/investment-return-calculator.vue";
import LengthConverter from "../modals/modal-cards/length-converter.vue";
import LoanAmortizationSchedule from "../modals/modal-cards/loan-amortization-schedule.vue";
import MassFlowRateConverter from "../modals/modal-cards/mass-flow-rate-converter.vue";
import MedicationDosageCalculator from "../modals/modal-cards/medication-dosage-calculator.vue";
import NameToRgbConverter from "../modals/modal-cards/name-to-rgb-converter.vue";
import NumericBaseConverter from "../modals/modal-cards/numeric-base-converter.vue";
import PlanetaryAgeCalculator from "../modals/modal-cards/planetary-age-calculator.vue";
import PresentAndFutureValueCalculator from "../modals/modal-cards/present-and-future-value-calculator.vue";
import PressureConverter from "../modals/modal-cards/pressure-converter.vue";
import RelativeHumidityAndDewPointCalculator from "../modals/modal-cards/relative-humidity-and-dew-point-calculator.vue";
import RingSizeConverter from "../modals/modal-cards/ring-size-converter.vue";
import ScientificUnitsConverter from "../modals/modal-cards/scientific-units-converter.vue";
import SewingMeasurementsConverter from "../modals/modal-cards/sewing-measurements-converter.vue";
import ShoeSizeConverter from "../modals/modal-cards/shoe-size-converter.vue";
import SpeedConverter from "../modals/modal-cards/speed-converter.vue";
import TemperatureConverter from "../modals/modal-cards/temperature-converter.vue";
import TextEncodingConverter from "../modals/modal-cards/text-encoding-converter.vue";
import TimeZoneConverter from "../modals/modal-cards/time-zone-converter.vue";
import UvIndexConverter from "../modals/modal-cards/uv-index-converter.vue";
import VolumeConverter from "../modals/modal-cards/volume-converter.vue";
import WeightConverter from "../modals/modal-cards/weight-converter.vue";
import WindSpeedConverter from "../modals/modal-cards/wind-speed-converter.vue";
export default {
    data (){
      return {
        category: null
      }
    },
    components: {
      Modal,
      AngleConverter,
      AreaConverter,
      BiomedicalUnitsConverter,
      BmiCalculator,
      BraSizeConverter,
      BroadbandSpeedCalculator,
      TimeUnitConverter,
      CaloriesBurnedCalculator,
      ClothingSizeConverter,
      CaloriesIngestedCalculator,
      CmykToRgbConverter,
      CookingMeasurements,
      CurrencyConverter,
      DataConverter,
      DateOfMaturityCalculator,
      DensityConverter,
      EnergyConverter,
      FuelEfficiencyConverter,
      GloveSizeConverter,
      HatSizeConverter,
      HeatIndexCalculator,
      HexToRgbConverter,
      HsvToRgbConverter,
      InterestRateCalculator,
      InvestmentReturnCalculator,
      LengthConverter,
      LoanAmortizationSchedule,
      MassFlowRateConverter,
      MedicationDosageCalculator,
      NameToRgbConverter,
      NumericBaseConverter,
      PlanetaryAgeCalculator,
      PresentAndFutureValueCalculator,
      PressureConverter,
      RelativeHumidityAndDewPointCalculator,
      RingSizeConverter,
      ScientificUnitsConverter,
      SewingMeasurementsConverter,
      ShoeSizeConverter,
      SpeedConverter,
      TemperatureConverter,
      TextEncodingConverter,
      TimeZoneConverter,
      UvIndexConverter,
      VolumeConverter,
      WeightConverter,
      WindSpeedConverter
    },
    created() {
      const categoryId = this.$route.params.id;
      this.category = Bd.Categories.find(c => c.id.toString() === categoryId);
      console.log("Componente Category carregado");
      window.addEventListener('popstate', this.handlePopState);
    },
    beforeDestroy() {
    window.removeEventListener('popstate', this.handlePopState);
    },
    methods: {
    openModal(index) {
        const modalId = 'modal' + index;
        const modalElement = this.$refs.modals.find(modal => modal.$el.id === modalId);
        if (modalElement) {
            const bootstrapModal = new bootstrap.Modal(modalElement.$el);
            bootstrapModal.show();
            history.pushState({ modal: modalId }, null, null);
        }
    },
    handlePopState(event) {
        const modalId = event.state && event.state.modal;
        if (modalId) {
            const modalElement = this.$refs.modals.find(modal => modal.$el.id === modalId);
            if (modalElement) {
                const bootstrapModal = bootstrap.Modal.getInstance(modalElement.$el);
                if (bootstrapModal) {
                    bootstrapModal.hide();
                }
            }
        }
    }
},

}
</script>

<style>

</style>