Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    launch: function() {
	/*
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist',
                }
            ]
        });
	*/
		var containerPanel = Ext.create('Ext.panel.Panel', {
			renderTo: Ext.getBody(),
			width: 800,
			height: 400,
			layout: 'column',
			title: 'Container Panel',
			suspendLayout: true // Suspend automatic layouts while we do several different things that could trigger a layout on their own
		});
		
		containerPanel.add([
			{
				xtype: 'userlist',
				height: 300,
				columnWidth: 0.75,		
			},
			{
				xtype: 'userlist',
				title: 'Child Panel 2',
				height: 300,
				columnWidth: 0.25	
			}
		]);

		// Turn the suspendLayout flag off.
		containerPanel.suspendLayout = false;

		// Trigger a layout.
		containerPanel.doLayout();
    },
	
    controllers: [
        'Users'
    ],
});

