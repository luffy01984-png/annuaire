const categories = [
    {
        id: 'management',
        name: 'Direction',
        icon: '🏢',
        manager: { name: 'Jean Dupont', phone: '+33612345678' },
        team_leaders: [
            { name: 'Marie Cura', phone: '+33623456789' },
            { name: 'Paul Smith', phone: '+33634567890' }
        ],
        polyvalents: [
            { name: 'Sophie Martin', phone: '+33645678901' },
            { name: 'Lucas Bernard', phone: '+33656789012' }
        ]
    },
    {
        id: 'hr',
        name: 'Ressources Humaines',
        icon: '👥',
        manager: { name: 'Claire Dubois', phone: '+33611122233' },
        team_leaders: [
            { name: 'Thomas Lefebvre', phone: '+33622233344' }
        ],
        polyvalents: [
            { name: 'Julie Petit', phone: '+33633344455' }
        ]
    },
    {
        id: 'it',
        name: 'Informatique',
        icon: '💻',
        manager: { name: 'David Leroy', phone: '+33644455566' },
        team_leaders: [
            { name: 'Emma Morel', phone: '+33655566677' }
        ],
        polyvalents: [
            { name: 'Hugo Fournier', phone: '+33666677788' }
        ]
    },
    {
        id: 'sales',
        name: 'Commercial',
        icon: '📈',
        manager: { name: 'Sarah Girard', phone: '+33677788899' },
        team_leaders: [
            { name: 'Kevin Bonnet', phone: '+33688899900' }
        ],
        polyvalents: [
            { name: 'Laura Blanc', phone: '+33699900011' }
        ]
    },
    {
        id: 'marketing',
        name: 'Marketing',
        icon: '📢',
        manager: { name: 'Julien Roux', phone: '+33600011122' },
        team_leaders: [
            { name: 'Camille Faure', phone: '+33611122234' }
        ],
        polyvalents: [
            { name: 'Nicolas Rey', phone: '+33622233345' }
        ]
    },
    {
        id: 'logistics',
        name: 'Logistique',
        icon: '🚚',
        manager: { name: 'Antoine Andre', phone: '+33633344456' },
        team_leaders: [
            { name: 'Manon Mercier', phone: '+33644455567' }
        ],
        polyvalents: [
            { name: 'Pierre Roche', phone: '+33655566678' }
        ]
    },
    {
        id: 'finance',
        name: 'Finance',
        icon: '💰',
        manager: { name: 'Karine Lemaire', phone: '+33666677789' },
        team_leaders: [
            { name: 'Alexandre Gauthier', phone: '+33677788890' }
        ],
        polyvalents: [
            { name: 'Lea Meunier', phone: '+33688899901' }
        ]
    },
    {
        id: 'uep1',
        name: 'UEP 1',
        icon: '🏭',
        manager: { name: 'Chef UEP 1', phone: '+33600000001' },
        team_leaders: [{ name: 'Team Leader 1', phone: '+33600000011' }],
        polyvalents: [{ name: 'Polyvalent 1', phone: '+33600000021' }]
    },
    {
        id: 'uep2',
        name: 'UEP 2',
        icon: '🏭',
        manager: { name: 'Chef UEP 2', phone: '+33600000002' },
        team_leaders: [{ name: 'Team Leader 2', phone: '+33600000012' }],
        polyvalents: [{ name: 'Polyvalent 2', phone: '+33600000022' }]
    },
    {
        id: 'uep3',
        name: 'UEP 3',
        icon: '🏭',
        manager: { name: 'Chef UEP 3', phone: '+33600000003' },
        team_leaders: [{ name: 'Team Leader 3', phone: '+33600000013' }],
        polyvalents: [{ name: 'Polyvalent 3', phone: '+33600000023' }]
    },
    {
        id: 'uep4',
        name: 'UEP 4',
        icon: '🏭',
        manager: { name: 'Chef UEP 4', phone: '+33600000004' },
        team_leaders: [{ name: 'Team Leader 4', phone: '+33600000014' }],
        polyvalents: [{ name: 'Polyvalent 4', phone: '+33600000024' }]
    },
    {
        id: 'uep5',
        name: 'UEP 5',
        icon: '🏭',
        manager: { name: 'Chef UEP 5', phone: '+33600000005' },
        team_leaders: [{ name: 'Team Leader 5', phone: '+33600000015' }],
        polyvalents: [{ name: 'Polyvalent 5', phone: '+33600000025' }]
    },
    {
        id: 'uep6',
        name: 'UEP 6',
        icon: '🏭',
        manager: { name: 'Chef UEP 6', phone: '+33600000006' },
        team_leaders: [{ name: 'Team Leader 6', phone: '+33600000016' }],
        polyvalents: [{ name: 'Polyvalent 6', phone: '+33600000026' }]
    },
    {
        id: 'uep7',
        name: 'UEP 7',
        icon: '🏭',
        manager: { name: 'Chef UEP 7', phone: '+33600000007' },
        team_leaders: [{ name: 'Team Leader 7', phone: '+33600000017' }],
        polyvalents: [{ name: 'Polyvalent 7', phone: '+33600000027' }]
    },
    {
        id: 'uep8',
        name: 'UEP 8',
        icon: '🏭',
        manager: { name: 'Chef UEP 8', phone: '+33600000008' },
        team_leaders: [{ name: 'Team Leader 8', phone: '+33600000018' }],
        polyvalents: [{ name: 'Polyvalent 8', phone: '+33600000028' }]
    },
    {
        id: 'quality',
        name: 'Qualité',
        icon: '✅',
        manager: { name: 'Celine Noel', phone: '+33622233346' },
        team_leaders: [
            { name: 'Romain Brun', phone: '+33633344457' }
        ],
        polyvalents: [
            { name: 'Chloe Dupuy', phone: '+33644455568' }
        ]
    },
    {
        id: 'support',
        name: 'Service Client',
        icon: '🎧',
        manager: { name: 'Maxime Renard', phone: '+33655566679' },
        team_leaders: [
            { name: 'Elodie Gaillard', phone: '+33666677790' }
        ],
        polyvalents: [
            { name: 'Florian Barbier', phone: '+33677788891' }
        ]
    }
];
