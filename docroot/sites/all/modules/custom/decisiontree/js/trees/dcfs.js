<div id="drawing"></div>
    <script>

    flowSVG.draw(SVG('drawing').size(2000,3000));
flowSVG.config({
    interactive: false,
    showButtons: false,
    connectorLength: 60,
    scrollto: false,
    processHeight:100,
    processWidth:250,
    finishHeight:100,
});
flowSVG.shapes(
    [{
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
                    text:'Learn what your options are',
                    url:'/content/not-indicated',
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
                    text:'Learn more',
                    url:'/content/im-indicated',
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
            type:'finish',
            text:[
                'Your level of compliance',
                'will feed into the court',
                'decision. Non-compliance',
                'makes a termination',
                'of rights almost certain.'
            ],

        },
        {
            label:'fosterCourt',
            type:'process',
            text:[
                ''
            ],
            links:[
                {
                    text:'What happens at court?',
                    url:'http://www.google.com',
                    target:'courtDates'
                }
            ],
            next:'courtDates'
        },
        {
            label:'courtDates',
            type:'process',
            text:[
                'You will be assigned court',
                'dates. Click below to',
                'learn about expectations',
                'when you attend court dates.'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
                    target:'judgment'
                }
            ],
            next:'judgment'
        },
        {
            label:'judgment',
            type:'decision',
            text:[
                'The judge decides',
                'how your case will',
                'end. Were your children',
                'returned to you?'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
                    target:''
                }
            ],
            yes:'returned',
            no:'notReturned'
        },
        {
            label:'returned',
            type:'finish',
            text:[
                'There will be a wrap-up',
                'process that may take',
                '6 months to a year',
                'before the case is closed.'
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
            label:'notReturned',
            type:'decision',
            text:[
                'Was the judgment',
                'for Guardianship?'
            ],
            yes:'guardianship',
            no:'terminationOfRights'
        },
        {
            label:'guardianship',
            type:'process',
            text:[
                'The children will',
                'live with someone',
                'else, but you will',
                'have some rights.'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
                    target:'guardianshipAppeal'
                }
            ],
            next:'guardianshipAppeal'
        },
        {
            label:'terminationOfRights',
            type:'process',
            text:[
                'If your rights are',
                'terminated, there will',
                'no longer be any',
                'legal tie between',
                'you and the children'
            ],
            links:[
                {
                    text:'Learn more',
                    url:'http://www.google.com',
                    target:'terminationAppeal'
                }
            ],
            next:'terminationAppeal'
        },
        {
            label:'guardianshipAppeal',
            type:'finish',
            text:[
                'You have the right',
                'to appeal the court decision'
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
            label:'terminationAppeal',
            type:'finish',
            text:[
                'You have the right',
                'to appeal the court decision'
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
            type:'finish',
            text:[
                'If you have complied',
                'with mandated services',
                'you might get your kids',
                'back. If you have not',
                'complied, you almost',
                'certainly will not',
                'get your kids back.'
            ],

        }
    ]);

</script>