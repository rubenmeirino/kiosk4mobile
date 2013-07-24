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
        scrollable: false,
        items: [
            {
                xtype: 'container',
                margin: '10 0 0 0 ',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        no: '1',
                        border: 0,
                        cls: 'HomeBut',
                        height: 100,
                        html: '<img src="img/Dallas_3.jpg" height="100" />',
                        padding: 0,
                        width: 130,
                        icon: ''
                    },
                    {
                        xtype: 'spacer',
                        width: 10
                    },
                    {
                        xtype: 'button',
                        no: '2',
                        border: 0,
                        cls: 'HomeBut',
                        height: 100,
                        html: '<img src="img/Dallas_4.jpg" height="100" />',
                        padding: 0,
                        width: 130
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        no: '1',
                        cls: 'HomeCls',
                        ui: 'confirm',
                        width: 130,
                        text: 'Replica Home'
                    },
                    {
                        xtype: 'spacer',
                        width: 10
                    },
                    {
                        xtype: 'button',
                        no: '2',
                        cls: 'HomeCls',
                        ui: 'confirm',
                        width: 130,
                        text: 'Replica Away'
                    }
                ]
            },
            {
                xtype: 'container',
                margin: '10 0 0 0',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        no: '3',
                        border: 0,
                        cls: 'HomeBut',
                        height: 100,
                        html: '<img src="img/Dallas_2.jpg" height="100" />',
                        padding: 0,
                        width: 130
                    },
                    {
                        xtype: 'spacer',
                        width: 10
                    },
                    {
                        xtype: 'button',
                        no: '4',
                        border: 0,
                        cls: 'HomeBut',
                        height: 100,
                        html: '<img src="img/Dallas_1.jpg" height="100" />',
                        padding: 0,
                        width: 130
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        no: '3',
                        cls: 'HomeCls',
                        ui: 'confirm',
                        width: 130,
                        text: 'Premier Home'
                    },
                    {
                        xtype: 'spacer',
                        width: 10
                    },
                    {
                        xtype: 'button',
                        no: '4',
                        cls: 'HomeCls',
                        ui: 'confirm',
                        width: 130,
                        text: 'Premier Away'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Choose  Jersey',
                items: [
                    {
                        xtype: 'button',
                        docked: 'right',
                        html: '<img src="img/Logo.png" />',
                        padding: 0
                    }
                ]
            }
        ]
    }

});