import { createRouter, createWebHistory } from 'vue-router'
import Main from "../components/layout/Main.vue"
import Category from "../components/pages/Category.vue"
import AngleConverter from '../components/modals/modal-cards/angle-converter.vue';
import AreaConverter from "../components/modals/modal-cards/area-converter.vue";
import BiomedicalUnitsConverter from "../components/modals/modal-cards/biomedical-units-converter.vue";
import BmiCalculator from "../components/modals/modal-cards/bmi-calculator.vue";
import BraSizeConverter from "../components/modals/modal-cards/bra-size-converter.vue";
import BroadbandSpeedCalculator from "../components/modals/modal-cards/broadband-speed-calculator.vue";
import CalendarDateConverter from "../components/modals/modal-cards/time-unit-converter.vue";
import CaloriesBurnedCalculator from "../components/modals/modal-cards/calories-burned-calculator.vue";
import CaloriesInjestedCalculator from "../components/modals/modal-cards/calories-ingested-calculator.vue";
import ClothingSizeConverter from "../components/modals/modal-cards/clothing-size-converter.vue";
import CmykToRgbConverter from "../components/modals/modal-cards/cmyk-to-rgb-converter.vue";
import CookingMeasurments from "../components/modals/modal-cards/cooking-measurements.vue";
import CurrencyConverter from "../components/modals/modal-cards/currency-converter.vue";
import DataConverter from "../components/modals/modal-cards/data-converter.vue";
import DateOfMaturityCalculator from "../components/modals/modal-cards/date-of-maturity-calculator.vue";
import DensityConverter from "../components/modals/modal-cards/density-converter.vue";
import EnergyConverter from "../components/modals/modal-cards/energy-converter.vue";
import FuelEfficencyConverter from "../components/modals/modal-cards/fuel-efficiency-converter.vue";
import GloveSizeConverter from "../components/modals/modal-cards/glove-size-converter.vue";
import HatSizeConverter from "../components/modals/modal-cards/hat-size-converter.vue";
import HeatIndexCalculator from "../components/modals/modal-cards/heat-index-calculator.vue";
import HexToRgbConverter from "../components/modals/modal-cards/hex-to-rgb-converter.vue";
import HsvToRgbConverter from "../components/modals/modal-cards/hsv-to-rgb-converter.vue";
import InterestRateConverter from "../components/modals/modal-cards/interest-rate-calculator.vue";
import LengthConverter from "../components/modals/modal-cards/length-converter.vue";
import LoanAmortizationSchedule from "../components/modals/modal-cards/loan-amortization-schedule.vue";
import MassFlowRateConverter from "../components/modals/modal-cards/mass-flow-rate-converter.vue";
import MedicationDosageCalculator from "../components/modals/modal-cards/medication-dosage-calculator.vue";
import NameToRgbConverter from "../components/modals/modal-cards/name-to-rgb-converter.vue";
import NumericBaseConverter from "../components/modals/modal-cards/numeric-base-converter.vue";
import PlanetaryAgeCalculator from "../components/modals/modal-cards/planetary-age-calculator.vue";
import PresentAndFutureValueCalculator from "../components/modals/modal-cards/present-and-future-value-calculator.vue";
import PressureConverter from "../components/modals/modal-cards/pressure-converter.vue";
import RelativeHumidityAndDewPointCalculator from "../components/modals/modal-cards/relative-humidity-and-dew-point-calculator.vue";
import RingSizeConverter from "../components/modals/modal-cards/ring-size-converter.vue";
import ScientificUnitsConverter from "../components/modals/modal-cards/scientific-units-converter.vue";
import SewingMeasurementsConverter from "../components/modals/modal-cards/sewing-measurements-converter.vue";
import ShoeSizeConverter from "../components/modals/modal-cards/shoe-size-converter.vue";
import SpeedConverter from "../components/modals/modal-cards/speed-converter.vue";
import TemperatureConverter from "../components/modals/modal-cards/temperature-converter.vue";
import TextEncodingConverter from "../components/modals/modal-cards/text-encoding-converter.vue";
import TimeZoneConverter from "../components/modals/modal-cards/time-zone-converter.vue";
import UvIndexConverter from "../components/modals/modal-cards/uv-index-converter.vue";
import VolumeConverter from "../components/modals/modal-cards/volume-converter.vue";
import WeightConverter from "../components/modals/modal-cards/weight-converter.vue";
import WindSpeedConverter from "../components/modals/modal-cards/wind-speed-converter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main },
    { path: '/categories/:id', component: Category, children: []  }
    
  ]
})

import jsonData from '../assets/bd.json'
jsonData.Categories.forEach(category => {
  category.Converters.forEach(converter => {
    const component =  () => import(/* @vite-ignore */`../components/modals/modal-cards/${converter.modalUrl.slice(42)}`)
    const route = {
      path: `/categories/${category.id}/converters/${converter.id}`,
      component: component ,
      props: true
    };
    router.addRoute('Category', route);
  });
});

export default router
