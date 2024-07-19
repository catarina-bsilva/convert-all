<template>
<div class="modal  bg-dark bg-opacity-75" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-info bg-opacity-75">
            <div class="modal-header border-bottom-0">
                <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="container mb-4 ">
                <form class="d-flex flex-column justify-items-center align-items-center w-100">
                    <slot></slot>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import SubmitBtn from '../modals/modals-elements/submit-btn.vue'
import InputNumSmall from '../modals/modals-elements/input-num-small.vue'
import InputNumMed from '../modals/modals-elements/input-num-med.vue'
import InputOptionsSmall from '../modals/modals-elements/input-options-small.vue'
import InputOptionsMed from '../modals/modals-elements/input-options-med.vue'
import OutputNormal from '../modals/modals-elements/output-normal.vue'
import OutputBig from '../modals/modals-elements/output-big.vue'

export default {
    components: {
        SubmitBtn,
        InputNumSmall,
        InputNumMed,
        InputOptionsSmall,
        InputOptionsMed,
        OutputNormal,
        OutputBig
    }
}
</script>

<style>

</style>