<div id="drawing"></div>
    <script>

    flowSVG.draw(SVG('drawing').size(900,3000));
flowSVG.config({
    interactive: false,
    showButtons: false,
    connectorLength: 60,
    scrollto: false,
    processHeight:50,
    processWidth:250,
    finishHeight:100,
});
flowSVG.shapes(
    [
        {
            label:'investigatorVisit',
            type:'decision',
            text:[
                'Did investigator visit',
                'result in a finding',
                'of Indicated?'
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
                'Are you indicated alone',
                'or with someone else?'
            ],
            yes:'self',
            no:'abuser'
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
                'If you have an advocate,',
                'talk to them at every step!'
            ],
            links:[
                {
                    text:'Appeal the finding',
                    url:'',
                    target:'intact'
                }
            ],
            next:'intact'
        },
        {
            label:'intact',
            type:'process',
            text:[
                'Consider whether you',
                'wish to appeal the decision'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
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
            yes:'intactCaseworker',
            no:'fosterCare'
        },
        {
            label:'fosterCare',
            type:'process',
            text:[
                'If your kids go to foster',
                'care, you can start',
                'working with a caseworker',
                'and going to court'
            ],
            links:[
                {
                    text:'Learn about foster care',
                    url:'http://www.google.com',
                    target:'fosterCareDecision'
                }
            ],
            next:'fosterCareDecision'
        },
        {
            label:'fosterCareDecision',
            type:'decision',
            text:[
                'Would you like to',
                'learn about working',
                'with your caseworker',
                'first?'
            ],
            yes:'fosterCaseworker',
            no:'fosterCourt'
        },
        {
            label:'fosterCaseworker',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'Meet with your caseworker',
                    url:'http://www.google.com',
                    target:'fosterIntegratedAssessment'
                }
            ],
            next:'fosterIntegratedAssessment'
        },
        {
            label:'fosterIntegratedAssessment',
            type:'process',
            text:[
                'Receive an Integrated',
                'Assessment'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
                    target:'fosterSvcPlan'
                }
            ],
            next:'fosterSvcPlan'
        },
        {
            label:'fosterSvcPlan',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'Receive a Service Plan',
                    url:'http://www.google.com',
                    target:'fosterMandatedSvc'
                }
            ],
            next:'fosterMandatedSvc'
        },
        {
            label:'fosterMandatedSvc',
            type:'process',
            text:[
                'Proceed with mandated',
                'services'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
                    target:'fosterSvcResult'
                }
            ],
            next:'fosterSvcResult'
        },
        {
            label:'fosterSvcResult',
            type:'decision',
            text:[
                'Have you been compliant',
                'with mandated services?'
            ],
            yes:'fosterSvcComplete',
            no:'fosterSvcFail'
        },
        {
            label:'fosterSvcComplete',
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
            label:'fosterSvcFail',
            type:'finish',
            text:[
                'Case may be continued',
                'or concluded'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
                    target:''
                }
            ]
        },
        {
            label:'fosterCourt',
            type:'finish',
            text:[
                ''
            ],
            links:[
                {
                    text:'Go to court hearing',
                    url:'http://www.google.com',
                    target:''
                }
            ]
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
                'Receive an Integrated',
                'Assessment'
            ],
            links:[
                {
                    text:'Learn more',
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
                'Proceed with mandated',
                'services'
            ],
            links:[
                {
                    text:'Learn more',
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
                'Have you been compliant',
                'with mandated services?'
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
                'Case may be continued',
                'or concluded'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
                    target:''
                }
            ]
        }
    ]);

</script>