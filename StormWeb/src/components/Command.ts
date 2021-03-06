import Vue from "vue";
import {StaticHelpers} from "../StaticHelpers";
import DefaultComponent from "./Default";
import BlockComponent from "./Block";
import EncounterComponent from "./Encounter";
import MonsterComponent from "./Monster";

export default Vue.extend({
    template: `
        <div>
        <div class="input-line line">
            <div class="prompt">{{ user }}</div>
            <div>
                <input style="color: white;" class="cmdline" v-bind:value="command.input" readonly="" autofocus>
            </div>
        </div>
        <div style="padding-bottom: 10px; padding-top: 5px; color: white">
            <component :is="command.templateName" :data="command.output"></component>
        </div>
    </div>
    `,
    name: "command",
    props: ['command', 'user'],
    components: {
        DefaultComponent, BlockComponent, MonsterComponent, EncounterComponent
    },
    mounted: function () {
        StaticHelpers.scrollWindow();
        StaticHelpers.hideSpinner();
    }
});
