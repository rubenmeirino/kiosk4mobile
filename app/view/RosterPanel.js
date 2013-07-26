/*
 * File: app/view/RosterPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Kiosk4.view.RosterPanel', {
    extend: 'Ext.dataview.List',
    alias: 'widget.RosterPanel',

    config: {
        id: 'RosterPanel',
        itemId: 'RosterPanel',
        data: [
            {
                title: 'Jethro Bodine - 23'
            },
            {
                title: 'Erik Cole - 45'
            },
            {
                title: 'Cody Eakin - 41'
            },
            {
                title: 'Vernon Fiddler - 45'
            },
            {
                title: 'Ryan Garbutt - 41'
            },
            {
                title: 'Shawn Horcoff - 45'
            },
            {
                title: 'Lane MacDermid - 41'
            },
            {
                title: 'Rich Peverley - 45'
            },
            {
                title: 'Antoine Roussel - 41'
            },
            {
                title: 'Tyler Seguin - 41'
            },
            {
                title: 'Tom Wandell - 41'
            },
            {
                title: 'Ray Whitney - 41'
            },
            {
                title: 'Antoine Roussel - 41'
            }
        ],
        itemTpl: [
            '<div align="center">{title}</div>'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Choose from Roster',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            if(!Ext.getCmp('CustomizePanel')){Ext.Viewport.add({xtype: 'CustomizePanel'});}
                            Ext.getCmp('CustomizePanel').show({type:'slideIn',direction:'right'});
                            Ext.getCmp('RosterPanel').hide();
                        },
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom'
            }
        ],
        listeners: [
            {
                fn: 'onRosterPanelItemTap',
                event: 'itemtap'
            }
        ]
    },

    onRosterPanelItemTap: function(dataview, index, target, record, e, eOpts) {
        Kiosk4.app.oldPage='RosterPanel';
        /*if(!Ext.getCmp('CheckOutPanel')){Ext.Viewport.add({xtype: 'CheckOutPanel'});}
        Ext.getCmp('CheckOutPanel').show({type:'slideIn',direction:'left'});
        Ext.getCmp('RosterPanel').hide();
        Ext.getCmp('CheckOutPanel').items.items[4].setTitle(Ext.getCmp('ItemInfo').getData().Name);*/
        var title=record.data.title;var temp=title.split('-');
        Kiosk4.app.jerseyNumber=temp[1];
        Kiosk4.app.jerseyName=temp[0];
        if(!Ext.getCmp('CustomizeFormPanel')){Ext.Viewport.add({xtype: 'CustomizeFormPanel'});}
        Ext.getCmp('CustomizeFormPanel').show({type:'slideIn',direction:'left'});
        Ext.getCmp('RosterPanel').hide();
        Ext.getCmp('CustomizeFormPanel').items.items[1].setTitle(Ext.getCmp('ItemInfo').getData().Name);
        Ext.getCmp('CustomizeFormPanel').setValues({
            name:Kiosk4.app.jerseyName,
            number:Kiosk4.app.jerseyNumber
        });
        //Kiosk4.app.jerseyNumber=Ext.getCmp('NameAndNumber').items.items[1].items.items[1].getValue();
        //Kiosk4.app.jerseyName=Ext.getCmp('NameAndNumber').items.items[1].items.items[0].getValue();
    }

});