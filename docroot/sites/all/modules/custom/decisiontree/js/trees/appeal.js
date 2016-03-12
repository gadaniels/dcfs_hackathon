
flowSVG.draw(SVG('drawing').size(900, 1100));
flowSVG.config({
    interactive: true,
    showButtons: true,
    connectorLength: 60,
    scrollto: true
});
flowSVG.shapes(
    [
        {
            label: 'knowPolicy',
            type: 'decision',
            text: [
                'Do you know the ',
                'Open Access policy',
                'of the journal?'
            ],
            yes: 'hasOAPolicy',
            no: 'checkPolicy'
        },
        {
            label: 'hasOAPolicy',
            type: 'decision',
            text: [
                'Does it have Open',
                'Access paid option or is it an',
                ' Open Access journal?'
            ],
            yes: 'CCOffered',
            no: 'canWrap'
        },
        {
            label: 'CCOffered',
            type: 'decision',
            text: [
                'Creative Commons licence',
                'CC-BY offered?'
            ],
            yes: 'canComply',
            no:'checkGreen'
        },
        {
            label: 'canComply',
            type: 'finish',
            text: [
                'Great - can comply. ',
                'Please complete'
            ],
            links: [
                {
                    text: 'application form',
                    url: 'http://www.jqueryscript.net/chart-graph/Simple-SVG-Flow-Chart-Plugin-with-jQuery-flowSVG.html',
                    target: '_blank'
                }
            ],
            tip: {title: 'HEFCE Note',
                text:
                    [
                        'You must put your',
                        'accepted version into',
                        'WRAP and/or subject',
                        'repository within 3 months',
                        'of acceptance.'
                    ]}
        },
        {
            label: 'canWrap',
            type: 'decision',
            text: [
                'Can you archive in ',
                'WRAP and/or Subject',
                'repository?'
            ],
            yes: 'checkTimeLimits',
            no: 'doNotComply'
        },
        {
            label: 'doNotComply',
            type: 'finish',
            text: [
                'You do not comply at all. ',
                'Is this really the only journal',
                ' you want to use? ',
                'Choose another or make ',
                'representations to journal'
            ],
            tip: {title: 'HEFCE Note',
                text:
                    [
                        'If you really have to go',
                        'this route you must log',
                        'the exception in WRAP on',
                        'acceptance in order',
                        'to comply.'
                    ]}
        },
        {
            label: 'checkGreen',
            type: 'process',
            text: [
                'Check the journal\'s policy',
                'on the green route'
            ],
            next: 'journalAllows',
        },
        {
            label: 'journalAllows',
            type: 'decision',
            text: ['Does the journal allow this?'],
            yes: 'checkTimeLimits',
            no: 'cannotComply',
            orient: {
                yes:'r',
                no: 'b'
            }

        },
        {
            label: 'checkTimeLimits',
            type: 'process',
            text: [
                'Make sure the time limits',
                'acceptable',
                '6 month Stem',
                '12 month AHSS'
            ],
            next: 'depositInWrap'
        },
        {
            label: 'cannotComply',
            type: 'finish',
            text: [
                'You cannot comply with',
                'RCUK policy. Contact ',
                'journal to discuss or',
                'choose another'
            ],
            tip: {title: 'HEFCE Note',
                text:
                    [
                        'Deposit in WRAP if',
                        'time limits acceptable. If',
                        'journal does not allow at all',
                        'an exception record will',
                        'have to be entered',
                        'in WRAP, if you feel this is',
                        'most appropriate journal.'
                    ]}
        },
        {
            label: 'depositInWrap',
            type: 'finish',
            text: [
                'Deposit in WRAP here or ',
                'contact team'
            ],
            tip: {title: 'HEFCE Note',
                text:
                    [
                        'You must put your',
                        'accepted version into',
                        'WRAP and/or subject',
                        'repository within 3 months',
                        'of acceptance.',
                        'Note also time limits:',
                        'HEFCE 12 months',
                        'STEM ? months',
                        'AHSS ? months',
                        'So you comply here too.'
                    ]}
        },
        {
            label: 'checkPolicy',
            type: 'process',
            text: [
                'Check journal website',
                'or go to '
            ],
            links: [
                {
                    text: 'SHERPA FACT/ROMEO ',
                    url: 'http://www.jqueryscript.net/chart-graph/Simple-SVG-Flow-Chart-Plugin-with-jQuery-flowSVG.html',
                    target: '_blank'
                }
            ],
            next: 'hasOAPolicy'
        }
    ]);

