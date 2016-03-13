<div id="drawing"></div>
    <script>

    flowSVG.draw(SVG('drawing').size(900,1100));
flowSVG.config({
    interactive: true,
    showButtons: true,
    connectorLength: 60,
    scrollto: true
});
flowSVG.shapes(
    [

        {
            label:'investigatorVisit',
            type:'decision',
            text:[
                'Did investigator visit result in a finding of Indicated?'
            ],
            yes:'indicated',
            no:'notIndicated'
        },
        {
            label:'notIndicated',
            type:'finish',
            text:[
                ''
            ],
            links:[
                {
                    text:'Appeal the decision',
                    url:'http://www.google.com',
                    target:''
                }
            ]
        },
        {
            label:'indicated',
            type:'decision',
            text:[
                'Are you indicated alone or with someone else?'
            ],
            yes:'abuser',
            no:'fosterCare'
        },
        {
            label:'abuser',
            type:'finish',
            text:[
                ''
            ],
            links:[
                {
                    text:'Learn what your options are',
                    url:'http://www.google.com',
                    target:''
                }
            ]
        },
        {
            label:'self',
            type:'process',
            text:[
                'If you have an advocate, talk to them at every step!'
            ],
            links:[
                {
                    text:'Appeal the finding',
                    url:'',
                    target:'isIntact'
                }
            ],
            next:'isIntact'
        },
        {
            label:'isIntact',
            type:'decision',
            text:[
                'Is the family still together?'
            ],
            yes:'intact',
            no:'fosterCare'
        },
        {
            label:'intact',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'Click here to learn about next steps and chances for appeal',
                    url:'http://www.google.com',
                    target:'intactAdvocate'
                }
            ],
            next:'intactAdvocate'
        },
        {
            label:'fosterCare',
            type:'finish',
            text:[
                ''
            ],
            links:[
                {
                    text:'Click to learn about foster care',
                    url:'http://www.google.com',
                    target:''
                }
            ]
        },
        {
            label:'intactAdvocate',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'Meet with your advocate',
                    url:'http://www.google.com',
                    target:'intactCaseworker'
                }
            ],
            next:'intactCaseworker'
        },
        {
            label:'intactCaseworker',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'Meet with your caseworker',
                    url:'http://www.google.com',
                    target:'intactIntegratedAssessment'
                }
            ],
            next:'intactIntegratedAssessment'
        },
        {
            label:'intactIntegratedAssessment',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'Receive an Integrated Assessment',
                    url:'http://www.google.com',
                    target:'intactSvcPlan'
                }
            ],
            next:'intactSvcPlan'
        },
        {
            label:'intactSvcPlan',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'Receive a Service Plan',
                    url:'http://www.google.com',
                    target:'intactMandatedSvc'
                }
            ],
            next:'intactMandatedSvc'
        },
        {
            label:'intactMandatedSvc',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'Proceed with mandated services',
                    url:'http://www.google.com',
                    target:'intactSvcResult'
                }
            ],
            next:'intactSvcResult'
        },
        {
            label:'intactSvcResult',
            type:'decision',
            text:[
                'Have you been compliant with mandated services?'
            ],
            yes:'intactSvcComplete',
            no:'intactSvcFail'
        },
        {
            label:'intactSvcComplete',
            type:'finish',
            text:[
                ''
            ],
            links:[
                {
                    text:'Case is typically concluded',
                    url:'http://www.google.com',
                    target:''
                }
            ]
        },
        {
            label:'intactSvcFail',
            type:'finish',
            text:[
                ''
            ],
            links:[
                {
                    text:'Case may be continued or concluded',
                    url:'http://www.google.com',
                    target:''
                }
            ]
        }

    ]);

</script>