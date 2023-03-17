import { LightningElement, wire, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import Treant1 from '@salesforce/resourceUrl/treant';

export default class RoleHierarchy extends LightningElement {
    treantInitialized = false;
    @track simple_chart_config
    renderedCallback() {

        Promise.all([
            loadScript(this, Treant1 + '/Treant.js')
        ]).then(() => {
            let chartData = {
                chart: {
                    container: "#role-hierarchy"
                },
                nodeStructure: {
                    text: { name: "Parent node" },
                    children: [{
                            text: { name: "First child" }
                        },
                        {
                            text: { name: "Second child" }
                        }
                    ]
                }
            };
            var chart = new Treant(chartData);

        }).catch(error => {
            alert(error);
        });
    }
}