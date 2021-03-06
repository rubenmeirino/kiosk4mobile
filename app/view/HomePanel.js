/*
 * File: app/view/HomePanel.js
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

Ext.define('Kiosk4.view.HomePanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.HomePanel',

    config: {
        id: 'HomePanel',
        itemId: 'HomePanel',
        layout: {
            align: 'center',
            type: 'vbox'
        },
        scrollable: true,
        items: [
            {
                xtype: 'container',
                margin: '10 0 0 0 ',
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'button',
                        no: '1',
                        border: 0,
                        cls: 'HomeBut',
                        height: 153,
                        html: '<img src="img/img4.png" height="153px" />',
                        padding: 0,
                        width: 220,
                        icon: ''
                    },
                    {
                        xtype: 'button',
                        no: '1',
                        cls: 'HomeCls',
                        ui: 'confirm',
                        width: 220,
                        text: 'Replica Home'
                    }
                ]
            },
            {
                xtype: 'container',
                margin: '10 0 0 0 ',
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'button',
                        no: '2',
                        border: 0,
                        cls: 'HomeBut',
                        height: 153,
                        html: '<img src="img/img5.png" height="153px" />',
                        padding: 0,
                        width: 220,
                        icon: ''
                    },
                    {
                        xtype: 'button',
                        no: '2',
                        cls: 'HomeCls',
                        ui: 'confirm',
                        width: 220,
                        text: 'Replica Away'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Choose  Jersey'
            }
        ]
    }

});